<?php

class Problem
{
	public $nvariaveis;
	public $nrestricoes;

	public $funcao;
	public $variaveis;
	public $objetivo;
	public $restricoes;
	public $b;

	public $tabela = array();
	public $parciais = array();
	public $nt = 0;

	function __construct($variaveis, $restricoes, $funcao, $objetivo, $b)
	{
		$this->variaveis = $variaveis;
		$this->restricoes = $restricoes;
		$this->funcao = $funcao;
		$this->objetivo = $objetivo;
		$this->b = $b;

		$this->nvariaveis = count($this->variaveis)-1;
		$this->nrestricoes = count($this->restricoes)-1;
		$nb = count($this->b)-1;

		//echo $nvariaveis;

		$this->tabela['z'][0] = 1;

		for($i = 1; $i <= $this->nrestricoes; $i++)
		{
			$this->tabela['z'][$i] = 0;
		}

		for($i = 1; $i <= $this->nvariaveis; $i++)
		{
			$iv = $this->variaveis[$i]['vr'];
			$vv = -$this->variaveis[$i]['va'];
			$this->tabela[$iv] = array();
			$this->tabela[$iv][0] = intval($vv);

			for($j = 1; $j <= $this->nrestricoes; $j++)
			{
				$this->tabela[$iv][$j] = intval($this->restricoes[$j][$i]);
				//echo json_encode($this->tabela);	
				// echo json_encode(intval($restricoes[$j][$i]));
			}
		}

		for($i = 1; $i <= $this->nrestricoes; $i++)
		{
			$iv = 'fx'.$i;
			$this->tabela[$iv] = array();
			$this->tabela[$iv][0] = 0;

			for($j = 1; $j <= $this->nrestricoes; $j++)
			{
				if($i === $j)
					$this->tabela[$iv][$j] = 1;
				else
					$this->tabela[$iv][$j] = 0;
			}
		}
		$this->tabela['b'] = array();
		$this->tabela['b'][0] = 0;
		for($i = 1; $i <= $nb; $i++)
		{
			$this->tabela['b'][$i] = intval($b[$i]);
		}
	}

	public function resolve()
	{
		
		while($this->hasNegativeValue())
		{
			$lineInputVariable = $this->getInputVariable();
			$outputLine = $this->getOutputLine($lineInputVariable);
			$elementP = $this->tabela[$lineInputVariable][$outputLine];
			$newLineP = $this->newLineP($outputLine, $elementP);
			$this->parciais[$this->nt]["tabela"] = $this->tabela;

			if($this->hasNegativeValue())
				$this->parciais[$this->nt]["otima"] = false;			
			else
				$this->parciais[$this->nt]["otima"] = true;			

			$this->calculateNewLines($newLineP, $lineInputVariable, $outputLine);
			$this->nt++;
		}
		
		$this->parciais[$this->nt]["tabela"] = $this->tabela;

		if($this->hasNegativeValue())
			$this->parciais[$this->nt]["otima"] = false;			
		else
			$this->parciais[$this->nt]["otima"] = true;			

		echo json_encode($this->parciais);
	}


	public function hasNegativeValue()
	{
		$v = array();
		
		//variaveis
		for($i = 1; $i <= $this->nvariaveis; $i++)
		{
			$iv = $this->variaveis[$i]['vr'];
			array_push($v, $this->tabela[$iv][0]);
		}
		//folgas
		for($i = 1; $i <= $this->nrestricoes; $i++)
		{
			$iv = 'fx'.$i;
			array_push($v, $this->tabela[$iv][0]);
		}

		foreach ($v as $a) {
			if($a < 0)
				return true;
		}

		return false;
	}

	public function getInputVariable()
	{
		$v = array();
		//variaveis
		for($i = 1; $i <= $this->nvariaveis; $i++)
		{
			$iv = $this->variaveis[$i]['vr'];
			$l = array("v"=>$this->tabela[$iv][0], "c"=>$iv);
			array_push($v, $l);
		}
		//folgas
		for($i = 1; $i <= $this->nrestricoes; $i++)
		{
			$iv = 'fx'.$i;
			$l = array("v"=>$this->tabela[$iv][0], "c"=>$iv);
			array_push($v, $l);
		}
		
		$m["v"] = 0;

		foreach($v as $a)
		{		
			if($a["v"] < $m["v"])
			{
				$m = $a;
			}
		}
		
		return $m["c"];
	}

	public function getOutputLine($inputV)
	{
		$input = $this->tabela[$inputV];
		$v = array();
		for($i = 1; $i <= $this->nrestricoes; $i++)
		{
			$l = array("v"=>$this->b[$i]/$input[$i], "l"=>$i);
			array_push($v, $l);
		}

		$m["v"] = 0;

		foreach ($v as $a) {
			if($a["v"] > $m["v"])
				$m = $a;
		}

		foreach ($v as $a) {
			if($a["v"] < $m["v"] && $a["v"] > 0)
				$m = $a;
		}

		return $m["l"];
	}

	public function newLineP($outputLine, $elementP)
	{
		$nlp = array();
		$nlp['z'] = $this->tabela['z'][$outputLine];
		for($i = 1; $i <= $this->nvariaveis; $i++)
		{
			$iv = $this->variaveis[$i]['vr'];
			$nlp[$iv] = $this->tabela[$iv][$outputLine]/$elementP;
		}
		//folgas
		for($i = 1; $i <= $this->nrestricoes; $i++)
		{
			$iv = 'fx'.$i;
			$nlp[$iv] = $this->tabela[$iv][$outputLine]/$elementP;
		}
		$nlp['b'] =  $this->tabela['b'][$outputLine]/$elementP;

		return $nlp;
	}

	public function calculateNewLines($nlp, $lineInputVariable, $outputLine)
	{
		//echo json_encode($nlp);
		for($l = 0; $l < $this->nrestricoes+1; $l++)
		{
			if($l != $outputLine)
			{
				$mult = ($this->tabela[$lineInputVariable][$l])*(-1);
				
				$this->tabela['z'][$l] = ($nlp['z']*$mult)+$this->tabela['z'][$l];
				
				for($i = 1; $i <= $this->nvariaveis; $i++)
				{
					$iv = $this->variaveis[$i]['vr'];
					$this->tabela[$iv][$l] = ($nlp[$iv]*$mult)+$this->tabela[$iv][$l];
				}

				for($i = 1; $i <= $this->nrestricoes; $i++)
				{
					$iv = 'fx'.$i;
					$this->tabela[$iv][$l] = ($nlp[$iv]*$mult)+$this->tabela[$iv][$l];
				}

				$this->tabela['b'][$l] = ($nlp['b']*$mult)+$this->tabela['b'][$l];
			}
		}

		$this->tabela['z'][$outputLine] = $nlp['z'];
		for($i = 1; $i <= $this->nvariaveis; $i++)
			{
				$iv = $this->variaveis[$i]['vr'];

				$this->tabela[$iv][$outputLine] = $nlp[$iv];
			}

			for($i = 1; $i <= $this->nrestricoes; $i++)
			{
				$iv = 'fx'.$i;
				$this->tabela[$iv][$outputLine] = $nlp[$iv];
			}
		$this->tabela['b'][$outputLine] = $nlp['b'];
	}

	public function getResult()
	{
		return $this->tabela;
	}
}