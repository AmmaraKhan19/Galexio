import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "lequipe",
        name: "The Team",
      },
      author: "THE TEAM",
      title: "The flash sports of January 4th",
      description: "Find all the sports news in your daily flash.",
      url: "https://www.lequipe.fr/Tous-sports/Actualites/Le-flash-sports-du-4-janvier/1372736",
      urlToImage:
        "https://medias.lequipe.fr/img-photo-jpg/le-flash-sports-l-equipe/1500000001731149/0:0,1997:1331-640-427-75/b2b4b.jpg",
      publishedAt: "2023-01-03T22:28:45+00:00",
      content:
        "Arsenal slowed down by Newcastle in the Premier League (0-0). The first examinations confirm a long absence for Martin Terrier. Carlos Sainz loses big in the Dakar. Mathieu van der Poel dominates a Wout ... [+81 tanks]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "Brazilian sports legend Pele laid to rest in Santos cemetery",
      description:
        "The burial concludes a 24-hour public memorial that attracted 230,000 mourners, including Brazilian President Lula.",
      url: "http://www.aljazeera.com/news/2023/1/3/brazils-lula-pays-respects-to-pele-as-150000-attend-stadium-wake",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/01/AP23003623518545.jpg?resize=1920%2C1440",
      publishedAt: "2023-01-03T15:16:18Z",
      content:
        "Mourners lined the streets in the coastal city of Santos, Brazil, on Tuesday as a black casket containing the late football legend Pele was transported from the Vila Belmiro stadium to the sports sta… [+4636 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: "Lyle Fitzsimmons",
      title: "Updated 2023 Hart Trophy Rankings as the NHL's MVP",
      description:
        "McDavid is a runaway betting favorite (-180 atDraftKings Sportsbook) to win his third Hart Memorial Trophy for the NHL's Most Valuable Player. The Oilers...",
      url: "https://bleacherreport.com/articles/10060359-updated-2023-hart-trophy-rankings-as-the-nhls-mvp",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/x_149,y_0,w_1364,h_909,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1672629360/rain2gudi42uhzqdcnd9.jpg",
      publishedAt: "2023-01-03T12:00:00Z",
      content:
        "Andy Devlin/NHLI via Getty Images\r\nWrite it in pen. Carve it in stone. Tattoo it on a prominent body part.\r\nBarring an act of the hockey gods, Connor McDavid will win the Hart Trophy in 2022-23.\r\nIt … [+1474 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: null,
      title: "&#x27; The Voncast&#x27; with Myles Garrett",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/304730-the-voncast-with-myles-garrett",
      urlToImage: null,
      publishedAt: "2022-12-01T18:52:49.4768049Z",
      content:
        "Myles Garrett and Von Miller talk playing in the NBA, pick their dream NFL defense and more",
    },
    {
      source: {
        id: "national-review",
        name: "National Review",
      },
      author: "Caroline Downey",
      title:
        "Man Wins Elite Women’s Race at International Cyclocross Tournament",
      description:
        "Killips has an online blog, Estro Junkie, which he calls ‘a newsletter about the intersection of sports and queer theory.’",
      url: "https://www.nationalreview.com/news/man-wins-elite-womens-race-at-international-cyclocross-tournament/",
      urlToImage:
        "https://www.nationalreview.com/wp-content/uploads/2022/10/transgender-flag.jpg?fit=2057%2C1200",
      publishedAt: "2022-11-15T02:37:29Z",
      content: null,
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: null,
      title: "☄️ NEW ANIME JUST DROPPED ☄️",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/289173-ja-vs-zion-anime",
      urlToImage: null,
      publishedAt: "2022-11-14T22:07:16.2323649Z",
      content: null,
    },
    {
      source: {
        id: "the-washington-times",
        name: "The Washington Times",
      },
      author: "The Washington Times https://www.washingtontimes.com",
      title: "Latest Quizzes",
      description:
        "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
      url: "https://www.washingtontimes.com/quiz/",
      urlToImage: null,
      publishedAt: "2022-08-30T16:37:43.8583104Z",
      content:
        "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: null,
      title: "Daily Briefing",
      description:
        "The day's top stories, from sports to movies to politics to world events.",
      url: "https://profile.usatoday.com/newsletters/daily-briefing/",
      urlToImage:
        "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      publishedAt: "2021-08-15T15:35:07+00:00",
      content:
        "The day's top stories, from sports to movies to politics to world events.",
    },
  ];
  constructor() {
    super();
    console.log("Hello, i am a news constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=> {
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title.slice(0, 34)} description={element.description.slice(0, 45)} imgurl={element.urlToImage} newsurl={element.url} />
        </div>
        })}
          
        </div>
      </div>
    );
  }
}

export default News;
