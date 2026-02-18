// basePath for GitHub Pages
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// 캐릭터 아이콘 매핑
export const characterIcons: Record<string, string> = {
  "진천우": `${basePath}/media/icon/진천우.webp`,
  "아델리아": `${basePath}/media/icon/아델리아.webp`,
  "펠리카": `${basePath}/media/icon/펠리카.webp`,
  "판": `${basePath}/media/icon/판.webp`,
  "엠버": `${basePath}/media/icon/엠버.webp`,
  "레바테인": `${basePath}/media/icon/레바테인.webp`,
  "질베르타": `${basePath}/media/icon/질베르타.webp`,
  "이본": `${basePath}/media/icon/이본.webp`,
  "포그라니치니크": `${basePath}/media/icon/포그라니치니크.webp`,
  "여풍": `${basePath}/media/icon/여풍.webp`,
  "라스트라이트": `${basePath}/media/icon/라스트라이트.webp`,
  "울프가드": `${basePath}/media/icon/울프가드.webp`
};

// 메일 데이터
export interface Mail {
  date: string;
  character: string;
  title: string;
  content: string;
  file: string;
}

export const mailData: Mail[] = [
  {
    date: "260207",
    character: "펠리카",
    title: "펠리카의 메시지",
    content: `관리자에게,
어느덧 우리도 참 많은 일을 같이 겪었네. 근데 지친 기색 하나 없이 늘 그렇게 씩씩하게 문제를 해결하는 관리자를 보면 정말 놀라워. 사실 처음엔 걱정도 좀 했어. 다시 깨어난 관리자가 혹시라도 내 기억 속의 모습과 다르면 어쩌나 하고 말이야... 미안, 가끔 나도 모르게 쓸데없는 생각을 할 때가 있거든.
아무튼, 이것만은 꼭 기억해 줘. 엔드필드 감독관으로서 나도 관리자의 짐을 나눠 짊어질 준비가 되어 있다는 걸 말이야!
앞으로도 너무 서두르지 말고 관리자의 속도에 맞춰서 해나갔으면 좋겠어. 내가 준비한 보급품이 조금이나마 힘이 되길 바랄게.
우리를 더 높은 곳으로 이끌어 줘, 관리자.`,
    file: `${basePath}/media/mail/260207_펠리카.png`
  },
  {
    date: "260216",
    character: "질베르타",
    title: "질베르타의 인사",
    content: `난 열심히 제강호를 꾸미고 있는 질베르타라고 해, 반가워!
시간이 참 빠르네. 얼마 전까지만 해도 가방에 떨어지는 낙엽을 바라봤던 것 같은데, 눈 깜짝할 사이에 봄이 찾아왔어. 따뜻한 봄처럼 조금 더 즐거운 하루가 이어지길 바랄게. 그리고... 우리한테도 더 많이 의지해 줘. 우리 모두 네 곁에 있으니까.
이번 봄은 어디로 휴가를 갈지 정했어? 난 아직 트리글라바랑 라반도르마 중에 고민하고 있거든. 둘 다 불꽃놀이가 되게 예뻐서 말이야. 음... 근데 갑자기 생각난 건데, 제강호에 있으면 저 두 곳의 불꽃놀이를 다 볼 수 있지 않을까? 헤헤... 농담이야.
아, 그리고 밤꽃꿀이랑 절인 꽃잎을 조금 넣은 디저트를 준비했어. 내가 편지를 전달하러 다니면서 샀던 기념품들이야. 섞어 먹으니까 맛있었거든! 네가 좋아했으면 좋겠어!`,
    file: `${basePath}/media/mail/260216_질베르타.png`
  },
  {
    date: "260217",
    character: "레바테인",
    title: "레바테인의 인사",
    content: `물건은 받았지?
식당을 지나가는데 직원이 불러 세우더니, 이 디저트에 어떤 재료를 넣을지 꼭 대답해 줘야 한다고 하더라고. 난 별생각 없이 옆에 놓인 무한 제공 아이스크림 냉장고를 가리켰지. 내가 준비한 이 디저트가 차갑고도 달콤한 이유야. 하지만... 난 네가 이걸 좋아할 거라고 생각해.
이걸 다 먹고 만약 겨울이 생각난다면, 내가 너한테 했던 말을 떠올려 봐. '언젠가 너도 끝없는 겨울 속에서 불꽃이 필요해진다면... 그때 날 찾아와.'
불꽃이 항상 함께하는 것처럼 따뜻한 봄날이 되길 바랄게.`,
    file: `${basePath}/media/mail/260217_레바테인.png`
  }
];

// 이벤트 캐릭터
export interface EventCharacter {
  name: string;
  image?: string;
  audioKR?: string;
  audioJP?: string;
}

// 이벤트 데이터
export interface EventData {
  name: string;
  bgm: string;
  characters: EventCharacter[];
}

export const eventData: Record<string, EventData> = {
  "event01": {
    name: "따뜻한 봄의 인사",
    bgm: `${basePath}/media/event/event01/event01_bgm.mp3`,
    characters: [
      {
        name: "펠리카",
        image: `${basePath}/media/event/event01/image/event01_펠리카.png`,
        audioKR: `${basePath}/media/event/event01/audio/event01_펠리카_KR.mp3`,
        audioJP: `${basePath}/media/event/event01/audio/event01_펠리카_JP.mp3`
      },
      {
        name: "아델리아",
        image: `${basePath}/media/event/event01/image/event01_아델리아.png`,
        audioKR: `${basePath}/media/event/event01/audio/event01_아델리아_KR.mp3`,
        audioJP: `${basePath}/media/event/event01/audio/event01_아델리아_JP.mp3`
      },
      {
        name: "판",
        image: `${basePath}/media/event/event01/image/event01_판.png`,
        audioKR: `${basePath}/media/event/event01/audio/event01_판_KR.mp3`,
        audioJP: `${basePath}/media/event/event01/audio/event01_판_JP.mp3`
      },
      {
        name: "질베르타",
        image: `${basePath}/media/event/event01/image/event01_질베르타.png`,
        audioKR: `${basePath}/media/event/event01/audio/event01_질베르타_KR.mp3`,
        audioJP: `${basePath}/media/event/event01/audio/event01_질베르타_JP.mp3`
      },
      {
        name: "진천우",
        image: `${basePath}/media/event/event01/image/event01_진천우.png`,
        audioKR: `${basePath}/media/event/event01/audio/event01_진천우_KR.mp3`,
        audioJP: `${basePath}/media/event/event01/audio/event01_진천우_JP.mp3`
      },
      {
        name: "여풍",
        image: `${basePath}/media/event/event01/image/event01_여풍.png`,
        audioKR: `${basePath}/media/event/event01/audio/event01_여풍_KR.mp3`,
        audioJP: `${basePath}/media/event/event01/audio/event01_여풍_JP.mp3`
      }
    ]
  }
};

// 날짜 포맷팅
export function formatDate(dateStr: string): string {
  const year = "20" + dateStr.substring(0, 2);
  const month = dateStr.substring(2, 4);
  const day = dateStr.substring(4, 6);
  return `${year}.${month}.${day}`;
}
