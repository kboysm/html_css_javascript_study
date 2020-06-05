html_css_javascript 복습

## css는 readme.md파일에 공부한 것을 정리하기로 결정

css 셀렉터 연습 사이트 : https://flukeout.github.io/ -> 32단계까지 있음, 전부 클리어

position:
relative - 원래 아이템이 있던 곳이 기준
absolute - 아이템이 담겨있는 상자를 기준
fixed - 상자에서 벗어나 페이지가 기준
stiky - 스크롤링이 되어도 원래 있던 자리에 그대로 존재

https://caniuse.com/ : 어떤 속성값이 얼마나 많은 브라우저에서 지원이 되는지 알 수 있음,각 각 브라우저에서 전세계적으로 얼마나 많은 사용자들이 사용하고 있는지 알 수 있음

PostCSS를 통해서 우리는 최신의 CSS문법을 사용하지만 저 녀석이 구버전(최신 CSS를 지원해주지 않는 IE같은 브라우저)를 위해서 CSS변환작업을 해줌

height: 100vh -> 부모에 상관없이 높이100%를 다 쓰겠다는 의미

## Flexbox : css의 꽃

flexbox는 2가지만 이해하면 금방 배움

1.container(박스에 들어가는 속성) & item(아이템에 들어가는 속성)

2.수평축과 수직축을 알아야하고 둘 중 어떤것이 메인축인지 파악 , 아이템의 정렬 방향을 보고 메인축을 파악할 수 있음

```
.container{
distplay:flex;
}
아이템이 자동적으로 왼쪽에서 오른쪽으로 정렬됨(박스모델도 정렬됨.. 신기)
```

```
.container{
distplay:flex;
flex-direction:row; // 기본적인 정령 방향, 왼쪽 상단에서 오른쪽 상단으로 아이템을 정렬
flex-direction:row-reverse; //오른쪽 상단 에서 왼쪽 상단으로 아이템을 정렬
flex-direction:column;// 좌측 상단에서 좌측 하단으로 정렬
flex-direction:column-reverse;// 좌측 하단에서 좌측 상단으로 정렬
flex-wrap:nowrap; //기본값으로 아이템들이 많아져도 다음 줄로 내려주지 않음
flex-wrap:warp; // 자동적으로 한 로우가 다 차면 다음줄에서부터 아이템을 채워감
flex-wrap:wrap-reverse; //거꾸로 맨 마지막 아이템부터 첫번째 줄부터 차례로 마지막 줄 까지 채워감,여러 줄일 경우 위에서 아래로 거꾸로 뒤집는 효과
flex-flow : flex-direction + flex-wrap을 의미하고 column nowrap을 하면 두가지 옵션에 각각의 설정을 해준것과 동일하다.
justify-content: 각각의 아이템을 어떻게 배치할건지 설정 , 기본값은flex-start
justify-content:flex-end는 아이템의 순서는 유지하고 오른쪽으로 배치,만약 flex-direction이 column이면 아래로 붙여서 배치함 ,기본적으로 오른쪽으로 아이템들이 붙어서 정렬 되어 있다면 다시 왼쪽으로 붙여서(즉 반대로) 정렬함
justify-content:center; // 아이템을 가운데 정렬
justify-content:space-around; // container의 아이템들의 각각마다 공간을 주어 배치,맨 처음과 맨 마지막은 조금 좁음
justify-content:space-evenly; // 모든 아이템(처음과 끝 포함)의 간격을 모두 동일하게 해줌
justify-content:space-betwwen; // 맨처음과 마지막 아이템은 화면에 딱 맞게 붙이고 나머지 아이템들의 간격을 동일하게 설정해줌
align-items:center; // 아이템들을 수직적으로 정렬할 때 사용,아이템들을 수직적으로 정 중앙부터 배치
align-items: baseline; // text를 기준으로 아이템들을 정렬(아이템들의 크기가 다를 때 사용)
align-content:space-between; // 위에 아이템들은 top에 딱 붙고 아래 아이템들은 bottom에 딱 붙고 중간에 아이템과 위 아래의 아이탬에 일정한 간격을 줌
align-content:center; // 중간에 아이템들을 정렬 시키고 위 아래 간격을 동일하게 줌
//새로나온 속성이 많기 때문에 브라우저에서 호환되는지 꼭 확인하고 사용할 것
align-content:start; // 아이템들의 줄단위를 위에서 아래로 붙여서 차례로 채움
}

```

지금 다 외울 필요 없고 이해를 해야함 나중에 필요할 때 https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 에서 찾아보기

```
flexbox의 item에 들어가는 속성들 정리
container에 display:flex;가 설정 되있다고 가정
order:0; //기본값,order의 숫자를 통해서 아이템의 순서를 지정할 수 있음 !! -1을 준다면 아이템이 가장 첫번째로 배치
ex) 1 2 3이라면 3 2 1로 바꿀 수 있음  //각각의 아이템 order를 지정해주면 됌
하지만 잘 사용하진 않음,이런게 있다 정도는 알고 있어야 함
flex-grow:1; 을 주게 되면 container의 크기에 따라 아이템의width가 바뀌어 margin없이 container의 width를 채움
flex-shrink:2; // 다른 아이템들이 container의 크기가 줄어들때 크기가 줄어드는 것보다 2배 더 줄어들라는 의미
flex-basis:auto; //기본값 grow나 shrink의 맞춰서 변형
flex-basis:50%로 지정하면 이 아이템이 container의 width를 50%차지 하고 나머지 아이템들이 50%를 차지하게 함
align-self:center;를 지정하면 해당 아이템만 align-content:center의 효과를 나타나게 함
```

flexbox연습 사이트 : https://flexboxfroggy.com/ 40분 정도 걸린거같음 클리어!

## Emmet 연습

사이트 : https://emmet.io/

! + tab : html의 기본형식이 자동으로 완성

.lsm + tab의 결과

```
<div class="lsm></div>
//div는 가장 기초적인 아이로 클래스 네임이나 id를 주면 자동으로 div로 설정됨
```

div>(header>ul>li\*2>a)+footer>p의 결과

```
<div>
        <header>
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </header>
        <footer>
            <p></p>
        </footer>
    </div>
```

p{hello}의 결과

```
<p>hello</p>
```

자동으로 숫자를 할당하기

p.class${item $}\*5의 결과

```
<p class="class1">item 1</p>
<p class="class2">item 2</p>
<p class="class3">item 3</p>
<p class="class4">item 4</p>
<p class="class5">item 5</p>
```

더미용 텍스트 만들기

p>lorem 의 결과 , p>lorem4(4개의 단어만 입력하라는 뜻)의 결과

```
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti voluptatibus consequatur eaque, officia non alias eum optio voluptatum incidunt impedit perspiciatis ea dolorem itaque cumque nostrum maiores reprehenderit rerum?</p>

<p>Lorem ipsum dolor sit.</p>
```

## 반응형 웹사이트 이론

웹 사이트에 접속하는 디바이스 또 화면의 크기마다 다르게 화면을 배치하는 기술로 주로 media query를 사용

min-width ,max-width정도는 알고 가야함

자세한 사항은 mdn사이트에서 media query로 검색하여 찾아가며 공부하기!
