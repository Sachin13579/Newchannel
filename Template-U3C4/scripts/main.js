async function apiCall(url) {
//add api call logic here
    try {
        var res = await fetch(url);
        var data = await res.json();
        return data;
    } catch (error) {
        console.log('error:', error)  
    }

}


function appendArticles(articles, main) {
    var article_arr = [];
 //add append logic here
 articles.map((obj)=>{
    var div = document.createElement("div");
    div.id = "news";
    div.addEventListener("click",()=>{
        article_arr.push(obj);
        localStorage.setItem("article",JSON.stringify(article_arr))
        window.location.href = "./news.html"
    })
    var div1 = document.createElement("div");
    var title = document.createElement("p");
    title.textContent = obj.title;
    var div2 = document.createElement("div");
    var description = document.createElement("p");
    description.textContent= obj.description;
    var div3=  document.createElement("div");
    var image = document.createElement("img");
    image.src = obj.urlToImage;
    div1.append(title);
    div2.append(description);
    div3.append(image);
    div.append(div1,div2,div3);
    main.append(div)
 })

}

export { apiCall, appendArticles }
