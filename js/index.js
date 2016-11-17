$(function() {

    var qtdV = 3;
    var qtdR = 1;
    var vs = new Array();
    var solucao;
    var iteracoes = 0;

    $("#second").hide();
    $("#result").hide();

    $("#btnNextPanel").click(function(){

        var frt = "<div id='frt1' class='frt'><form class='form-inline rtrd'><div class='form-group'><input type='text' id='rt1' class='form-control' placeholder='Variável' aria-describedby='basic-addon1'></div><div class='form-group'><input type='text' id='r1' onkeyup='alteraRtv(1)' class='form-control' placeholder='Valor' aria-describedby='basic-addon1'></div></form><form class='form-inline' id='frto1'></form></div>";
        $(".allRt").append(frt);

        var qtdVTotal = $(".vrd").length;
        $(".vrd").each(function(index){
            index += 1;

            var vr = $("#vr"+index).val();
            var va = $("#v"+index).val();

            if(vr == "")
                vr = 'v'+index;

            if(va == "")
                va = 0;

            vs[index] = {vr:vr, va:va};
            //console.log(vs);
            //console.log(vs[index]['vr']);

            if(index <= qtdVTotal){
                var el = "<div class='form-group vobj'><input type='text' id='vr"+index+"' class='form-control' value="+vs[index]['va']+vs[index]['vr']+" aria-describedby='basic-addon1' readonly></div>";
                $("#svr1").append(el);

                var elrt = "<div class='form-group rtobj'><div class='input-group'><input type='text' id='vrt"+qtdR+"-"+index+"' class='form-control' placeholder='Valor' aria-describedby='basic-addon1'><span class='input-group-addon' id='basic-addon1'> * "+vs[index]['vr']+" </span></div></div>";
                $("#frto"+qtdR).append(elrt);
            }
            if(index <= qtdVTotal-1){   
                var op = "<div class='form-group vobj'><h4><span class='label label-default'>+</span></div>";
                $("#svr1").append(op);

                var oprt = "<div class='form-group rtobj'><h4><span class='label label-default'>+</span></h4></div>";
                $("#frto"+qtdR).append(oprt);   
            }
        });
        var oprt = "<div class='form-group rtobj'><h4><span class='label label-default'><=</span></h4></div>";
        $("#frto"+qtdR).append(oprt);

        var elrt = "<div class='form-group rtobj'><div class='input-group'><input type='text' class='form-control' id='rap"+qtdR+"' placeholder='Valor' aria-describedby='basic-addon1'></div></div>";
        $("#frto"+qtdR).append(elrt);

        $("#first").hide();
        $("#second").show();
    }); 

    $("#btnPrevPanel").click(function(){

        $('.vobj').each(function(index){
            $(this).remove();
        });

        $('.frt').each(function(index){
            $(this).remove();
        });
        qtdR = 1;

        $("#first").show();
        $("#second").hide();
    }); 


    $("#btnAddVr").click(function(){
        if(qtdV == 0)
        {
            qtdV++;
            var el = "<form class='form-inline vrd' id='fvr"+qtdV+"'><div class='form-group'><input type='text' id='vr"+qtdV+"' class='form-control' placeholder='Variável' aria-describedby='basic-addon1'></div>\n<div class='form-group'><input type='text' id='v"+qtdV+"' class='form-control' placeholder='Valor' aria-describedby='basic-addon1'></div></form>";

            $('#allVr').append(el);_
        }else{
            qtdV++;
            var el = "<form class='form-inline vrd' id='fvr"+qtdV+"'><div class='form-group'><input type='text' id='vr"+qtdV+"' class='form-control' placeholder='Variável' aria-describedby='basic-addon1'></div>\n<div class='form-group'><input type='text' id='v"+qtdV+"' class='form-control' placeholder='Valor' aria-describedby='basic-addon1'></div></form>";

            $(el).insertAfter("#fvr"+(--qtdV));
            qtdV++;
        }
    }); 


    $("#btnDelVr").click(function(){
        $("form").remove("#fvr"+qtdV);
        qtdV--;
    });

    $("#btnAddRt").click(function(){
        if(qtdR == 0)
        {
            qtdR++;

            var el = "<div  id='frt"+qtdR+"' class='frt'><form class='form-inline rtrd'><div class='form-group'><input type='text' id='rt"+qtdR+"' class='form-control' placeholder='Variável' aria-describedby='basic-addon1'></div><div class='form-group'><input type='text' id='r"+qtdR+"' onkeyup='alteraRtv("+qtdR+")' class='form-control' placeholder='Valor' aria-describedby='basic-addon1'></div></form><form class='form-inline' id='frto"+qtdR+"'></form></div>";
            //$(el).insertAfter("#frt"+(--qtdR));
            $('.allRt').append(el);
            //qtdR++;

            var qtdVTotal = $(".vrd").length;
            $(".vrd").each(function(index){
                index += 1;

                if(index <= qtdVTotal){var elrt = "<div class='form-group rtobj'><div class='input-group'><span class='input-group-addon' id='basic-addon1'>"+vs[index]['vr']+" X </span><input type='text' id='vrt"+qtdR+"-"+index+"' class='form-control' placeholder='Valor' aria-describedby='basic-addon1'></div></div>";
                    $("#frto"+qtdR).append(elrt);
                }
                if(index <= qtdVTotal-1){
                    var oprt = "<div class='form-group rtobj'><h4><span class='label label-default'>+</span></h4></div>";
                    $("#frto"+qtdR).append(oprt);   
                }
            });
            var oprt = "<div class='form-group rtobj'><h4><span class='label label-default'><=</span></h4></div>";
            $("#frto"+qtdR).append(oprt);

            var elrt = "<div class='form-group rtobj'><div class='input-group'><input type='text' class='form-control' id='rap"+qtdR+"' placeholder='Valor' aria-describedby='basic-addon1'></div></div>";
            $("#frto"+qtdR).append(elrt);
        }else{
            qtdR++;

            var el = "<div  id='frt"+qtdR+"' class='frt'><form class='form-inline rtrd'><div class='form-group'><input type='text' id='rt"+qtdR+"' class='form-control' placeholder='Variável' aria-describedby='basic-addon1'></div><div class='form-group'><input type='text' id='r"+qtdR+"' onkeyup='alteraRtv("+qtdR+")' class='form-control' placeholder='Valor' aria-describedby='basic-addon1'></div></form><form class='form-inline' id='frto"+qtdR+"'></form></div>";
            $(el).insertAfter("#frt"+(--qtdR));
            qtdR++;

            var qtdVTotal = $(".vrd").length;
            $(".vrd").each(function(index){
                index += 1;

                if(index <= qtdVTotal){var elrt = "<div class='form-group rtobj'><div class='input-group'><input type='text' id='vrt"+qtdR+"-"+index+"' class='form-control' placeholder='Valor' aria-describedby='basic-addon1'><span class='input-group-addon' id='basic-addon1'> * "+vs[index]['vr']+" </span></div></div>";
                    $("#frto"+qtdR).append(elrt);
                }
                if(index <= qtdVTotal-1){
                    var oprt = "<div class='form-group rtobj'><h4><span class='label label-default'>+</span></h4></div>";
                    $("#frto"+qtdR).append(oprt);   
                }
            });
            var oprt = "<div class='form-group rtobj'><h4><span class='label label-default'><=</span></h4></div>";
            $("#frto"+qtdR).append(oprt);

            var elrt = "<div class='form-group rtobj'><div class='input-group'><input type='text' class='form-control' id='rap"+qtdR+"' placeholder='Valor' aria-describedby='basic-addon1'></div></div>";
            $("#frto"+qtdR).append(elrt);
        }
    }); 

    $("#btnDelRt").click(function(){
        $("div").remove("#frt"+qtdR);
        qtdR--;
    });


    $("#btnResultPanel").click(function(){

        //console.log(vs[1]['vr']);

        $("#result").show();
        $("#second").hide();

        var restricoes = new Array();
        var b = new Array();
        var linhas = qtdR + 1;
        var colunas = qtdR + qtdV+2;
        var solucao;
        iteracoes = $("#nOp").val();

        for(i = 1; i <= qtdR; i++)
        {
            var vRestricoes = new Array();

            for(j = 1; j <= qtdV; j++)
            {
                vRestricoes[j] = $("#vrt"+i+"-"+j+"").val();
                //console.log($("#vrt"+i+"-"+j+"").val());
            }
            restricoes[i] = vRestricoes;
            b[i] = $("#rap"+i+"").val();
        }

        funcao = $(".radio :checked").val();

        //restricoes = JSON.stringify(restricoes);
        //variaveis = JSON.stringify(vs);
        variaveis = vs;
        //objetivo = JSON.stringify(objetivo);

        $.ajax({                                      
            url: 'solution.php',       
            type: "POST",
            data: {restricoes: restricoes, variaveis: variaveis, funcao: funcao, b : b, iteracoes: iteracoes}
        }).done(function(msg) {
            console.log(msg);
            solucao = jQuery.parseJSON(msg);

            var elf = '<h4><span class="label label-success">Resultado da função obitda: '+(solucao.final.b[0].toFixed(2))*(-1)+'</span></h4>';
            $("#finalResult").append(elf);
            for(i = 0; i < solucao.solucaoFinal.length; i++)
            {
                var elso = "<h4><span class='label label-success'>"+solucao.solucaoFinal[i].v+": "+solucao.final.b[solucao.solucaoFinal[i].l].toFixed(2)+"</span></h4>";

                $("#finalResult").append(elso);
            }

            if($("#showAllProcess").is(':checked'))
            {
                console.log(solucao);
                np = solucao.qtdFinal;
                console.log(np);

                for(ik = 0; ik <= np; ik++)
                {
                    console.log(solucao[ik].tabela);
                    //TABLE HEAD
                    var el = "<div class='col-panel'><div class='table-responsive' id='ts"+ik+"'><table class='table table-hover'><thead><tr id='tbHead"+ik+"'><th>Z</th></tr></thead><tbody id='tbBody"+ik+"'></tbody></table><div>";
                    $("#thirdy-body").append(el);

                    vs.forEach(function(element, index, array){
                        var el = "<th>"+element['vr']+"</th>"; 
                        $("#tbHead"+ik).append(el);
                    })

                    restricoes.forEach(function(element, index, array){
                        var el = "<th>f"+index+"</th>"; 
                        $("#tbHead"+ik).append(el);
                    })

                    var el = "<th>B</th>"; 
                    $("#tbHead"+ik).append(el);
                    //////////////////////////

                    final = solucao[ik].tabela;
                    for(i = 0; i < qtdR+1; i++)
                    {
                        var ell = "<tr id='l"+ik+"-"+i+"'></tr>";
                        console.log(ell);
                        $("#tbBody"+ik).append(ell);
                    }

                    for(i = 0; i < final.z.length; i++)
                    {
                        var elz = "<td>"+final.z[i]+"</td>";
                        $("#l"+ik+"-"+i+"").append(elz);  
                    }                     

                    console.log(final);
                    vs.forEach(function(element, index, array){
                        elv = element['vr'];
                        totalv = final[elv].length;
                        for(i = 0; i < totalv; i++)
                        {
                            //console.log(final[elv][i]);
                            var elva = "<td>"+final[elv][i].toFixed(2)+"</td>";
                            console.log(elva);
                            $("#l"+ik+"-"+i+"").append(elva);  
                        } 
                    })

                    for(i = 1; i <= qtdR; i++)
                    {
                        totalr = final['fx'+i].length;
                        console.log(final['fx'+i][0]);
                        for(j = 0; j < totalr; j++)
                        {
                            var elrt = "<td>"+final['fx'+i][j].toFixed(2)+"</td>";
                            $("#l"+ik+"-"+j+"").append(elrt);
                        }
                    }

                    for(i = 0; i < final.b.length; i++)
                    {
                        var elb = "<td>"+final.b[i].toFixed(2)+"</td>";
                        $("#l"+ik+"-"+i+"").append(elb);  
                    }

                    console.log(solucao[ik].solucao);
                    for(i = 0; i < solucao[ik].solucao.length; i++)
                    {
                        if(solucao[ik].otima)
                            var elso = "<h4><span class='label label-success'>"+solucao[ik].solucao[i].v+"="+final.b[solucao[ik].solucao[i].l].toFixed(2)+"</span></h4>";
                        else
                            var elso = "<h4><span class='label label-warning'>"+solucao[ik].solucao[i].v+"="+final.b[solucao[ik].solucao[i].l].toFixed(2)+"</span></h4>";

                        $(elso).insertAfter("#ts"+ik+"");
                    }
                    $("#ts"+ik+"").append('</div>');
                }
            }
            else if($("#showEachProcess").is(":checked"))
            {
                np = solucao.qtdFinal;
                for(ik = 0; ik <= np; ik++)
                {
                    console.log(solucao[ik].tabela);
                    //TABLE HEAD
                    var el = "<div class='col-panel'><div class='table-responsive' id='ts"+ik+"'><table class='table table-hover'><thead><tr id='tbHead"+ik+"'><th>Z</th></tr></thead><tbody id='tbBody"+ik+"'></tbody></table><div>";
                    $("#thirdy-body").append(el);

                    vs.forEach(function(element, index, array){
                        var el = "<th>"+element['vr']+"</th>"; 
                        $("#tbHead"+ik).append(el);
                    })

                    restricoes.forEach(function(element, index, array){
                        var el = "<th>f"+index+"</th>"; 
                        $("#tbHead"+ik).append(el);
                    })

                    var el = "<th>B</th>"; 
                    $("#tbHead"+ik).append(el);
                    //////////////////////////

                    final = solucao[ik].tabela;
                    for(i = 0; i < qtdR+1; i++)
                    {
                        var ell = "<tr id='l"+ik+"-"+i+"'></tr>";
                        console.log(ell);
                        $("#tbBody"+ik).append(ell);
                    }

                    for(i = 0; i < final.z.length; i++)
                    {
                        var elz = "<td>"+final.z[i]+"</td>";
                        $("#l"+ik+"-"+i+"").append(elz);  
                    }                     

                    console.log(final);
                    vs.forEach(function(element, index, array){
                        elv = element['vr'];
                        totalv = final[elv].length;
                        for(i = 0; i < totalv; i++)
                        {
                            //console.log(final[elv][i]);
                            var elva = "<td>"+final[elv][i].toFixed(2)+"</td>";
                            console.log(elva);
                            $("#l"+ik+"-"+i+"").append(elva);  
                        } 
                    })

                    for(i = 1; i <= qtdR; i++)
                    {
                        totalr = final['fx'+i].length;
                        console.log(final['fx'+i][0]);
                        for(j = 0; j < totalr; j++)
                        {
                            var elrt = "<td>"+final['fx'+i][j].toFixed(2)+"</td>";
                            $("#l"+ik+"-"+j+"").append(elrt);
                        }
                    }

                    for(i = 0; i < final.b.length; i++)
                    {
                        var elb = "<td>"+final.b[i].toFixed(2)+"</td>";
                        $("#l"+ik+"-"+i+"").append(elb);  
                    }

                    console.log(solucao[ik].solucao);
                    for(i = 0; i < solucao[ik].solucao.length; i++)
                    {
                        if(solucao[ik].otima)
                            var elso = "<h4><span class='label label-success'>"+solucao[ik].solucao[i].v+"="+final.b[solucao[ik].solucao[i].l].toFixed(2)+"</span></h4>";
                        else
                            var elso = "<h4><span class='label label-warning'>"+solucao[ik].solucao[i].v+"="+final.b[solucao[ik].solucao[i].l].toFixed(2)+"</span></h4>";

                        $("#ts"+ik+"").append(elso);

                    }
                    var el = "<center><button type='button' id='prevState' class='btn btn-default btn-sm' onclick='showPrev("+ik+")' data-toggle='tooltip' title='Passo anterior'><span class='glyphicon glyphicon glyphicon-chevron-left' aria-hidden='true'></span></button><button type='button' id='nextState' class='btn btn-default btn-sm' onclick='showNext("+ik+","+np+")' data-toggle='tooltip' title='Próximo passo'><span class='glyphicon glyphicon glyphicon-chevron-right' aria-hidden='true'></button></center>";
                    $("#ts"+ik+"").append(el);

                    if(ik > 0)
                        $("#ts"+ik+"").hide();
                }
                
            }
            else
            {
                //TABLE HEAD
                 var el = "<div class='col-panel'><div class='table-responsive' id='ts'><table class='table table-hover'><thead><tr id='tbHead'><th>Z</th></tr></thead><tbody id='tbBody'></tbody></table><div>";
                 $("#thirdy-body").append(el);

                 vs.forEach(function(element, index, array){
                   var el = "<th>"+element['vr']+"</th>"; 
                   $("#tbHead").append(el);
                 })

                 restricoes.forEach(function(element, index, array){
                   var el = "<th>f"+index+"</th>"; 
                   $("#tbHead").append(el);
                 })

                 var el = "<th>B</th>"; 
                 $("#tbHead").append(el);
                //////////////////////////
                
                final = solucao.final;
                for(i = 0; i < qtdR+1; i++)
                {
                    var ell = "<tr id='l"+i+"'></tr>";
                    console.log(ell);
                    $("#tbBody").append(ell);
                }

                for(i = 0; i < final.z.length; i++)
                {
                    var elz = "<td>"+final.z[i].toFixed(2)+"</td>";
                    $("#l"+i).append(elz);  
                }                     

                console.log(final);
                vs.forEach(function(element, index, array){
                   elv = element['vr'];
                    totalv = final[elv].length;
                   for(i = 0; i < totalv; i++)
                    {
                        //console.log(final[elv][i]);
                        var elva = "<td>"+final[elv][i].toFixed(2)+"</td>";
                        console.log(elva);
                        $("#l"+i).append(elva);  
                    } 
                })

                for(i = 1; i <= qtdR; i++)
                {
                    totalr = final['fx'+i].length;
                    console.log(final['fx'+i][0]);
                    for(j = 0; j < totalr; j++)
                    {
                        var elrt = "<td>"+final['fx'+i][j].toFixed(2)+"</td>";
                        $("#l"+j).append(elrt);
                    }
                }

                for(i = 0; i < final.b.length; i++)
                {
                    var elb = "<td>"+final.b[i].toFixed(2)+"</td>";
                    $("#l"+i).append(elb);  
                }

                console.log(solucao.solucaoFinal);
                
                for(i = 0; i < solucao.solucaoFinal.length; i++)
                {
                    if(solucao.otimaFinal)
                        var elso = "<h4><span class='label label-success'>"+solucao.solucaoFinal[i].v+"="+final.b[solucao.solucaoFinal[i].l].toFixed(2)+"</span></h4>";
                    else
                        var elso = "<h4><span class='label label-warning'>"+solucao.solucaoFinal[i].v+"="+final.b[solucao.solucaoFinal[i].l].toFixed(2)+"</span></h4>";

                    $(elso).insertAfter("#ts");
                }
                $("#ts").append("</div>");
            }
        });

    }); 

    $("#btnNewProblem").click(function(){
        location.reload();
    })

});

function alteraRtv(r)
{
    $("#rap"+r).val($("#r"+r).val());
}

function resultSave()
{
    $("#btnResultSave").hide();
    $("#btnNewProblem").hide();
    window.print();
}

function showPrev(i)
{
    if(i > 0)
    {
        $("#ts"+i).hide();
        i--;
        $("#ts"+i).show();
    }
}

function showNext(i, t)
{
    if(i < t)
    {
        $("#ts"+i).hide();
        i++;
        $("#ts"+i).show();
    }
}