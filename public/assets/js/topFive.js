$.get("/api/topfive",function(data){
  for (let i=0;i<5;i++){
  $("#table").html(
    `<h6 class="action-title text-center">Top Scores:<h6>
    <p>Name:${data[i].userName}</p>
    <p>Wins:${data[i].wins}</p>`
  )
  console.log(data);
}
});