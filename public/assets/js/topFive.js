$.get("/api/topfive",function(data){
  for (let i=0;i<5;i++){
  $("#table").html(
    `<h6 class="action-title text-center">Top Scores:<h6>`
  )
  $("#table").append(
    `<p>Name:${data[i].userName}+Wins:${data[i].wins}</p>
    <p>Wins:${data[i].wins}</p>
    <br><br>`
  )
  console.log(data);
}
});