


$(document).ready(function(){

    // $("p").click(function(){
    //     $("button").hide();
    //   });
    var i=0;
    console.log("Hello World");

    $("#test").addClass("load");

    $("h4").click(function(){

        $("[class$='new']").css({"color":"blue"});

    });

    $(".button123").attr("disabled",true);

    $(".target").click(function(){
        $("#main > .target").css({"font-size" : "20px"});
    });

    $(".replaceHtml").replaceWith("<p>"+$(".replaceHtml").html()+"</p>");

    $("#parent").click(function(){
        $("#parent").append("<br><click class='newClick'>This is new Click element.. !!</click>");

       
    });

    $(".newClick").on('click',function(){
        $("#parent").append("<br><click class='newClick'>This is new Click element.. !!</click>");
        //$(".newClick").hide();
    });

    

    var el = $("<p></p>",{
        id : "new_id",
        class : "new_class"
    });

    var dropD = $("<br><select><option value='volvo'>Volvo</option><option value='saab'>Saab</option><option value='mercedes'>Mercedes</option><option value='audi'>Audi</option></select>");

    el.appendTo($("body"));

    $("select").change(function(){
        $(".appendHere").append($(this).children("option:selected").val()+"<br>");
    });
    

    $( ".hoverMe" ).hover(
        function() {
          $( this ).append( $(dropD) );
        }
      );

      $("a").click(function(e){
        e.preventDefault();
      });


      $(".button1").click(function(){
        $.ajax({url: "new.json", 
        dataType : 'json',
        type : "GET",
        success: function(result){
          $(".grab").html("Fetched JSON :"+result+"<br>Name:"+result.name);
          console.log(result);
        }});
      });

    
      $(".clickPrevent").click(function(){
        $(".l1").hide();
      });
      $(".clickPrevent .l1").click(function(e){
        e.stopPropagation();
      });


      $( ".buttonColor" ).click(function() {
        $( "td" ).each(function( index, element ) {
          // element == this
          var value1 = Number($( this ).html());
          if (value1 > 10) {
            $( element ).css( "backgroundColor", "yellow" );  
          }
        });
      });

      $(".button2").click(function(){
        $.ajax({url: "new.json", 
        dataType : "json",
        type : "DELETE",
        success: function(result){
            $('.removeMe').remove();
        },
        error: function(request,msg,error) {
          console.log("Request Failed");
          $('.removeMe').remove();
        }
       });
      });

    

  });


