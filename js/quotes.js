const quotes = [
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다.",
    author: "L. Ron Hubbard",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
    author: "Andre Malraux",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라 그리고 내일 죽을 것처럼 오늘을 살아라.",
    author: "James Byron Dean",
  },
  {
    quote:
      "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩.",
    author: "Joe Girard",
  },
  {
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
    author: "Herbert Spencer Gasser",
  },
  {
    quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다.",
    author: "James Baldwin",
  },
  {
    quote: "내 비장의 무기는 아직 손안에 있다. 그것은 희망이다.",
    author: "Charles Louis Napoléon Bonaparte",
  },
  {
    quote: "작은 기회로 부터 종종 위대한 업적이 시작된다.",
    author: "Demosthenes",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "얕은 사람은 행운을 믿으며, 강한 사람은 원인과 결과를 믿는다.",
    author: "Ralph Waldo Emerson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
