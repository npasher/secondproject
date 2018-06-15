$.get("/api/topfive",function(data){
  for (let i=0;i<5;i++){
    let scoreSelection=$("#table");

    // scoreSelection.attr("id","user-highScores-"+i);

    // $("#score-selection").append(scoreSelection);

    // $("#user-highscores-"+i).append("<h3"+(i+1)+data[i.userNames+"<h3>"]);
    // $("#user-highscores-"+i).append("<h3"+(i+1)+data[i.wins+"<h3>"]);
  }
});