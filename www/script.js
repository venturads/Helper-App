// search wordpress api json data 
const getSearch = function(){
  let searchVar = document.getElementById('input').value;
  document.getElementById("root").innerHTML = "Search: " + searchVar;
  getSe(searchVar);
}
// document.getElementById("btn").addEventListener("click", getSearch);
function getSe (n){
  const se = 'http://venturads.com/weldinghelper/api/get_search_results/?search=' + n;

document.getElementById("root").innerHTML = "<div class='loader'></div>";
  // alert("loading...");
fetch(se)
.then(function(response){
  return response.json();
  })
.then(function(data){
   getdata(data);
})

function getdata(data){
  let list="";
  for(let i=0;i<data.posts.length;i++){
    list += "<div class='btn-group-justified content'><a  type='button' class='btn btn-info sharp' id='settings' data-toggle='collapse' data-target='#demo" + data.posts[i].id + "'>" +  data.posts[i].title + "</a></div><div id='demo" +  data.posts[i].id + "' class='collapse'>" + data.posts[i].content + "</div></div>";
    }
  document.getElementById("root").innerHTML = list;
}
  
}
// document.getElementById('btn').addEventListener('click', getSe);

// get wordpress api json data
function getNews (){
  const news1 = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=82413d9fd4ad42528ed2caeb0473d089';

document.getElementById("root").innerHTML = "<div class='loader'></div>";
  // alert("loading...");
fetch(news1)
.then(function(response){
  return response.json();
  })
.then(function(data){
   getdata(data);
})

function getdata(data){
  let list="";
  for(let i=0;i<data.articles.length;i++){
    list += "<div id='pic'><a href='" + data.articles[i].url + "' target='_blank'><img src='" + data.articles[i].urlToImage + "' width='100%' /><p class='center'>" + data.articles[i].title + "</p></a></div>";
    }
  document.getElementById("root").innerHTML = list;
}
  
}
// document.getElementById('content-news').addEventListener('click', getNews);

// get wordpress api json data
function getGar (){
    //const n2 = 'http://venturads.com/weldinghelper/api/get_category_posts/?slug=welding';
    const n2 = 'https://venturads.com/json/weld.json';

  document.getElementById("root").innerHTML = "<div class='loader'></div>";
    // alert("loading...");
  fetch(n2)
  .then(function(response){
    return response.json();
    })
  .then(function(data){
     getdata(data);
  })
  
  function getdata(data){
    let list="";
    for(let i=0;i<data.data.length;i++){
      list += "<div class='btn-group-justified content'><a  type='button' class='btn btn-info sharp' id='settings' data-toggle='collapse' data-target='#demo" + data.data[i].id + "'>" +  data.data[i].title + "</a></div><div id='demo" +  data.data[i].id + "' class='collapse'>" + data.data[i].content + "</div></div>";
      }
    document.getElementById("root").innerHTML = list;
  }
    
  }

// more menu list
function getData (){
  // const n2 = 'https://venturads.com/helper-menu.json';

document.getElementById("root").innerHTML = "<div class='loader'></div>";
  let data=[
    {
      id: 2020,
      title: "Chart",
      content: "Welding Chart",
      url: "img/1.jpg",
      urlToImage: "img/1.jpg"
    },{
      id: 2021,
      title: "Symbols",
      content: "Symbols",
      url: "img/2.jpg",
      urlToImage: "img/2.jpg"
    },{
      id: 2022,
      title: "Specs",
      content: "Specs",
      url: "img/3.jpg",
      urlToImage: "img/3.jpg"
    },{
      id: 2023,
      title: "Settings",
      content: "Settings",
      url: "img/4.jpg",
      urlToImage: "img/4.jpg"
    },{
      id: 2024,
      title: "Basic Symbols",
      content: "Basic Symbols",
      url: "img/5.jpg",
      urlToImage: "img/5.jpg"
    },  {
      id: 2025,
      title: "Chart",
      content: "Welding Chart",
      url: "img/6.jpg",
      urlToImage: "img/6.jpg"
    },{
      id: 2026,
      title: "Data",
      content: "Data",
      url: "img/7.jpg",
      urlToImage: "img/7.jpg"
    },{
      id: 2027,
      title: "Types",
      content: "Types",
      url: "img/8.jpg",
      urlToImage: "img/8.jpg"
    },{
      id: 2028,
      title: "More Types",
      content: "More Types",
      url: "img/9.jpg",
      urlToImage: "img/9.jpg"
    },{
      id: 2029,
      title: "Weld Joints",
      content: "Weld Joints",
      url: "img/10.jpg",
      urlToImage: "img/10.jpg"
    },{
      id: 2030,
      title: "Process",
      content: "Process",
      url: "img/11.jpg",
      urlToImage: "img/11.jpg"
    },{
      id: 2031,
      title: "Safety",
      content: "Safety",
      url: "img/12.jpg",
      urlToImage: "img/12.jpg"
    },{
      id: 2032,
      title: "Equipment",
      content: "Equipment",
      url: "img/13.jpg",
      urlToImage: "img/13.jpg"
    },{
      id: 2033,
      title: "Workbench",
      content: "Workbench",
      url: "img/14.jpg",
      urlToImage: "img/14.jpg"
    },{
      id: 2034,
      title: "Seated Workbench",
      content: "Seated Workbench",
      url: "img/15.jpg",
      urlToImage: "img/15.jpg"
    },  {
      id: 2035,
      title: "Mill Direction",
      content: "Mill Direction",
      url: "img/16.jpg",
      urlToImage: "img/16.jpg"
    },{
      id: 2036,
      title: "Cutting Speeds",
      content: "Cutting Speeds",
      url: "img/17.jpg",
      urlToImage: "img/17.jpg"
    },{
      id: 2037,
      title: "Decimal Chart",
      content: "Decimal Chart",
      url: "img/18.jpg",
      urlToImage: "img/18.jpg"
    },{
      id: 2038,
      title: "Rpm",
      content: "Rpm",
      url: "img/19.jpg",
      urlToImage: "img/19.jpg"
    },{
      id: 2039,
      title: "Tap/Drill Chart",
      content: "Tap/Drill Chart",
      url: "img/20.jpg",
      urlToImage: "img/20.jpg"
    },{
      id: 2040,
      title: "Inch/Metric Chart",
      content: "Inch/Metric Chart",
      url: "img/21.jpg",
      urlToImage: "img/21.jpg"
    },{
      id: 2041,
      title: "Sheet Metal Charts",
      content: "Sheet Metal Charts",
      url: "img/22.jpg",
      urlToImage: "img/22.jpg"
    },{
      id: 2042,
      title: "Weld Details",
      content: "Weld Details",
      url: "img/23.jpg",
      urlToImage: "img/23.jpg"
    },{
      id: 2043,
      title: "Metal Inert Gas",
      content: "Metal Inert Gas",
      url: "img/24.jpg",
      urlToImage: "img/24.jpg"
    }
  ];
  let list = "";
  console.log("mylist: " + data[0].title);
  for(let i=0;i<data.length;i++){
    list += "<div class='btn-group-justified content'><a  type='button' class='btn btn-info sharp' id='settings' data-toggle='collapse' data-target='#demo" + data[i].id + "'>" +  data[i].title + "</a></div><div id='demo" +  data[i].id + "' class='collapse'><img src='" + data[i].url + "' width='100%' ></div></div>";
  document.getElementById('root').innerHTML = list;
}
  
}

document.getElementById('content-app').addEventListener('click', getData);
  
// more menu list
  function getMenu (){
    // const n2 = 'https://venturads.com/helper-menu.json';

  document.getElementById("root").innerHTML = "<div class='loader'></div>";
    let data=[
      {
        id: 1, name: "RPM Helper", link: "https://play.google.com/store/apps/details?id=com.venturads.RPM_HELPER"
      },
      {
        id: 2, name: "Endline puzzle game", link: "https://play.google.com/store/apps/details?id=com.venturads.games.EndLine"
      },
      {
        id: 3, name: "CNC Helper", link: "https://play.google.com/store/apps/details?id=com.venturads.CNCHelperPlay"
      },
      {
        id: 4, name: "Solidworks Helper", link: "https://play.google.com/store/apps/details?id=com.venturads.albert.SolidworksHelper"
      },
      {
        id: 5, name: "Ballon Pop Free puzzle game", link: "https://play.google.com/store/apps/details?id=com.venturads.BalloonPopFree"
      },
      {
        id: 6, name: "Sheet Metal Helper", link: "https://play.google.com/store/apps/details?id=com.venturads.SheetMetalHelper"
      },
      {
        id: 6, name: "Venturads.com", link: "https://venturads.com"
      }
    ];
    let list = "";
    console.log("mylist: " + data[0].name);
    for(let i=0;i<data.length;i++){
      list += "<div class='btn-group-justified content'><a href='" +  data[i].link + "' type='button' class='btn btn-info sharp' id='settings' data-target='#demo" + data[i].id + "' target='_blank'>" +  data[i].name + "</a></div><div id='demo" +  data[i].id + "' class='collapse'>" + data[i].name + "</div></div>";
    document.getElementById('root').innerHTML = list;
  }
    
  }
  document.getElementById('content-menu').addEventListener('click', getMenu);

  //admob id script
  function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);

    // Set AdMobAds options:
    admob.setOptions({
        publisherId:          "ca-app-pub-3864996818231266/6846758432",  // Required
        interstitialAdId:     "ca-app-pub-3864996818231266/6580570832",  // Optional
        // tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        // tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        // tappxShare:           0.5                                        // Optional
    });
    admob.createBannerView();
    admob.requestInterstitialAd({
      autoShowInterstitial: true
    });
}

document.addEventListener("deviceready", onDeviceReady, false);

