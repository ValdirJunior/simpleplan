$(function() {

    var qtdV = 3;
    var qtdR = 1;
    var vs = new Array();

    $("#second").hide();

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
            console.log(vs);
            //console.log(vs[index]['vr']);

            if(index <= qtdVTotal){
                var el = "<div class='form-group vobj'><input type='text' id='vr"+index+"' class='form-control' value="+vs[index]['va']+vs[index]['vr']+" aria-describedby='basic-addon1' readonly></div>";
                $("#svr1").append(el);

                var elrt = "<div class='form-group rtobj'><div class='input-group'><input type='text' id='vrt"+qtdR+"-"+index+"' class='form-control' placeholder='Valor' aria-describedby='basic-addon1'><span class='input-group-addon' id='basic-addon1'>"+vs[index]['vr']+" X </span></div></div>";
                $("#frto"+qtdR).append(elrt);
            }
            if(index <= qtdVTotal-1){   
                var op = "<div class='form-group vobj'><select class='form-control' id='opobj"+index+"'><option value='+'>+</option><option value='-'>-</option><option value='*'>*</option><option value='/'>/</option></select></div>";
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

                if(index <= qtdVTotal){var elrt = "<div class='form-group rtobj'><div class='input-group'><input type='text' id='vrt"+qtdR+"-"+index+"' class='form-control' placeholder='Valor' aria-describedby='basic-addon1'><span class='input-group-addon' id='basic-addon1'>"+vs[index]['vr']+" X </span></div></div>";
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

        console.log(vs[1]['vr']);

        var restricoes = new Array();
        var b = new Array();
        var linhas = qtdR + 1;
        var colunas = qtdR + qtdV+2;

        for(i = 1; i <= qtdR; i++)
        {
            var vRestricoes = new Array();

            for(j = 1; j <= qtdV; j++)
            {
                vRestricoes[j] = $("#vrt"+i+"-"+j+"").val();
                console.log($("#vrt"+i+"-"+j+"").val());
            }
            b[i] = $("#rap"+i).val();
            restricoes[i] = vRestricoes; 
        }
        console.log(vs);
        console.log(restricoes);
        console.log(b);

        $.ajax({                                      
            url: 'solution.php',       
            type: "POST",
            data: { lat: b } 
        }).done(function( msg ) {
            console.log(msg);
        });

    }); 

});

function alteraRtv(r)
{
    console.log(1);
    $("#rap"+r).val($("#r"+r).val());
}