#SimplePlan

Link da aplicação online: http://simpleplan.esy.es/ 

Projeto: <strong>Elaboração e implementação de um software para solução de problemas de Programação Linear (Simplex)</strong>

Bacharelado em Ciência da Computação / 6º Semestre / UNIVEM </br>
Disciplina de Pesquisa Operacional</br>
Prof. Ricardo Sabatine.

Bruno Vernaschi.                    RA: 54100-1<br/>
Danielle Guindas Peraccini.        	RA: 54502-3<br/>
Marina dos Santos Beretta.          RA: 54272-5<br/>
Valdir A. P. Junior.                RA: 53582-6<br/>

#Introdução
<p align="justify">Este documento fornece uma visão geral do aplicativo <strong>SimplePlan</strong> que foi projetado a partir da utilização do método <strong>Simplex</strong>, a fim de resolver problemas de <strong>programação linear</strong> com objetivo de maximizar e minimizar.
O Simplex é um dos algoritmos mais importantes descobertos neste século, o mesmo permite encontrar a solução ótima de um problema de Programação Linear de forma eficiente, onde são estabelecidas variáveis e restrições para as variáveis com intuito de testar as possibilidades de otimização dos resultados.
A aplicação foi elaborada utilizando a técnica de <strong>MVP  (Minimum Viable Product)</strong> que está diretamente conectada aos conceitos de Lean Starup e consiste num conjunto de testes sobre a viabilidade do negócio, onde várias versões do produto são liberadas aos stakeholders para se obter um feedback que agregue no desenvolvimento, ajuste e melhorias do projeto.</p>


#Requisitos do cliente

<ul>
<li>Sem número fixo de variáveis de decisão;</li>
<li>Sem número fixo de restrição;</li>
<li>Apresentar solução final em forma de relatório;</li>
<li>Exibir passo-a-passo do relatório de resultados;</li>
<li>Tratar métodos com soluções impossíveis ou limitadas.</li>
</ul>


#Objetivos
<p align="justify">Pensando na usabilidade do produto e na experiência do usuário com a aplicação, foram definidos como objetivos alguns valores considerados relevantes para o projeto, seguem:</p>
<ul>
<li><strong>Dinamismo:</strong> Utilização de parâmetros dinâmicos para que a solução atenda aos problemas de programação linear do cliente.</li>
<li><strong>Praticidade:</strong > Elaboração de um software que seja rápido e cômodo para favorecer a experiência do usuário. </li>
<li><strong>Acessibilidade:</strong> Aplicação de fácil acesso, sem necessidade de instalação de programas específicos para ser executado.</li>
<li><strong>Didático:</strong> Estruturação de técnicas simples e intuitivas para que o usuário possa facilmente identificar as funções de cada elemento da interface. </li>
</ul>

#Funcionalidades
<p align="justify">Dentro do escopo estabelecido, foram definidas nove principais funcionalidades para atender a todas as solicitações do cliente, sendo estas as que seguem:</p>
<ol>
<li><strong>Escolha do tipo de cálculo:</strong> Opção para selecionar o tipo entre as alternativas de maximizar ou minimizar o resultado da solução.</li>
<li><strong>Definição da função objetivo:</strong> Formulário para estabelecer a função objetivo.</li>
<li><strong>Definição das restrições:</strong> Disponibilização de campos para a inserção de quantas restrições o problema precisar.</li>
<li><strong>Número de iterações:</strong> Alternativa para escolher a quantidade de iterações que o sistema deverá executar.</li>
<li><strong>Solução:</strong> Produzir resultados a partir da execução do algoritmo de Simplex. </li>
<li><strong>Escolha da exibição do resultado: </strong> Opção para escolher visualizar apenas o resultado final ou cada passo-a-passo da solução.</li>
<li><strong>Passo-a-passo:</strong> Função que permite a exibição do relatório da solução indicando os detalhes de cada passo executado pelo programa.</li>
<li><strong>Impressão e download:</strong> Opção para que o usuário possa imprimir ou baixar os resultados obtidos pela execução do Simplex.</li>
<li><strong>Interpretação econômica do resultado:</strong> Apresentar apenas a solução final do problema, sem maiores detalhes.</li>
</ol>

#Ferramentas
<table>
  <tr>
    <th>Tecnologias</th>
    <th>Descrição</th>
     </tr>
  <tr>
  <td>Front-end</td>
  <td>Javascript/CSS/html</td>
  </tr>
 <tr>
  <td>Back-end</td>
  <td>PHP</td>
  </tr>
 <tr>
  <td>Servidor</td>
  <td>Hostinger</td>
  </tr>

</table>

#Manual de utilização do SimplePlan

<p>Seguem abaixo informações explicativas referente ao uso do SimplePlan:</p>

<ol>
<li><strong>Acessar o link da aplicação:</strong> http://simpleplan.esy.es/</li>
<li><strong>Escolher qual será o objetivo do cálculo a ser realizado:</strong> Maximização ou Minimização;</li>
<li><strong>Adicionar a quantidade de variáveis que integram o problema de programação linear;</strong> 
  <p>Exemplo Maximização:</p>
  <table>
  <tr>
    <th>Variável</th>
    <th>Valor</th>
     </tr>
  <tr>
  <td>X1</td>
  <td>3</td>
  </tr>
 <tr>
  <td>X2</td>
  <td>5</td>
  </tr>
</table>

<p>Exemplo Minimização:</p>
  <table>
  <tr>
    <th>Variável</th>
    <th>Valor</th>
     </tr>
  <tr>
  <td>X1</td>
  <td>4</td>
  </tr>
 <tr>
  <td>X2</td>
  <td>-2</td>
  </tr>
</table>

</li>
<li><strong>Clicar no botão para prosseguir com o próximo passo;</strong></li>
<li><strong>Editar operações na função objetivo gerada a partir das variáveis indicadas no passo anterior;</strong>
<p>Exemplo de funções objetivas e maximizar e minimizar:</p>
  <table>
  <tr>
  <td> <strong>Max Z</strong> = 3X1 + 5X2 </td>
  </tr>
 <tr>
  <td><strong>Min Z</strong> = 4X1 - 2X2</td>
  </tr>
</table>

</li>
<li><strong>Inserir as restrições do problema linear;</strong> 
  <p>Exemplo Maximização:</p>
  <table>
  <tr>
  <td>2X1 + 4X2 <= 10</td>
  </tr>
 <tr>
  <td>6X1 + 1X2 <= 20</td>
  </tr>
  <tr>
  <td>1X1 - 1X2 <= 30</td>
  </tr>
</table>
  <p>Exemplo Minimização:</p>
  <table>
  <tr>
  <td>2X1 + 1X2 <= 10</td>
  </tr>
 <tr>
  <td>1X1 - 1X2 <= 8</td>
  </tr>
</table>
</li>

<li><strong>Escolha como deseja visualizar o relatório da solução;</strong></li>

<li><strong>Clique em "Resolver" para produzir os resultados.</strong></li>
</ol>
<p>Obs: É possível avançar e retornar as etapas de inserção dos dados.</p>

#Problemas e Limitações
<p align="justify">No projeto de implementação do Simplex nesse projeto, algumas limitações de desenvolvimento foram estipuladas: </p>
<ul>
<li>Limite de 50 iterações para a execução da solução.</li>
<li>As restrições devem ser menores ou iguais a 0. </li>
</ul>

#Datas Importantes 

<table>
  <tr>
    <th>Data</th>
    <th>Evento</th>
      </tr>
  <tr>
    <td>05/10/2016</td>
    <td>Início do projeto.</td>   
  </tr>
  <tr>
    <td>10/10/2016</td>
    <td>Conhecimento do cenário e requisitos.</td>   
  </tr>
  
  <tr>
    <td>10/10/2016</td>
    <td>Entrega da prévia do orçamento e prazos.</td>   
  </tr>
  
  <tr>
    <td>19/10/2016</td>
    <td>Definição das funcionalidades.</td>   
  </tr>
  <tr>
    <td>24/10/2016</td>
    <td>Definição das ferramentas para a implementação.</td>   
  </tr>
  <tr>
    <td>28/10/2016</td>
    <td>Elaboração do layout.</td>   
  </tr>
  <tr>
    <td>31/10/2016</td>
    <td>Inicio do desenvolvimento.</td>   
  </tr>
  
  <tr>
    <td>05/11/2016</td>
    <td>Entrega da versão atualizada do orçamento.</td>   
  </tr>
  <tr>
    <td>08/11/2016</td>
    <td>Desenvolvimento  dos requisitos ainda não implementados. </td>   
  </tr> 
  <tr>
    <td>10/11/2016</td>
    <td>Validação dos testes das novas funções inseridas.</td>   
  </tr>  
  <tr>
    <td>10/11/2016</td>
    <td>Liberação em ambiente de produção.</td>   
  </tr> 
  <tr>
    <td>11/11/2016</td>
    <td>Entrega da primeira versão do Simplex.</td>   
  </tr>
    <tr>
    <td>16/11/2016</td>
    <td>Altualização de interface.</td>   
  </tr>
   <tr>
    <td>20/11/2016</td>
    <td>Implementação de melhorias no simplex.</td>   
  </tr>
  <tr>
    <td>23/11/2016</td>
    <td>Entrega da versão final do SimplePlan - Simplex.</td>   
  </tr>
  <tr>
    <td>23/11/2016</td>
    <td>Conclusão do relatório final.</td>   
  </tr>
</table>

#Compatibilidade
<table>
  <tr>
    <th>Navegadores</th>
    <td>Google Chrome, Mozilla Firefox, Opera, Safari, Internet Explorer 9+</td>
    </tr>
  <tr>
  <th>Sistemas Operacionais</th>
  <td>Unix, Windows</td>
  </tr>
</table>

#Conclusão

<p align="justify"> No trabalho foi criado um software que utiliza o método <strong>Simplex</strong> na resolução de problemas de <strong>programação linear</strong> com objetivo de <strong>maximizar e minimizar</strong>. A aplicação foi projetada com base na técnica de MVP, que está diretamente conectada aos conceitos de Lean Starup e tem intuido de efetuar testes de verificação da viabilidade do negócio, dessa forma, foram disponibilizadas versões prévias do produto aos stakeholders, a fim de se obter um feedback que acrescente informações relevantes para o desenvolvimento, ajustes e melhorias do projeto. Durante o decorrer do processo de desenvolvimento do SimplePlan, a equipe enfrentou alguns problemas relacionados aos prazos e entregas dos MVPs definidos, porém,  os casos foram reportados aos mais interessados e, em comum acordo, as entregas foram atualizadas. O software foi entregue seguindo as solicitações do cliente, disponibilizando um produto dinâmico e simples, atendendo aos objetivos principais referentes a maximização e minimização de problemas de programação linear.</p>
