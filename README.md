html_css_javascript 복습 

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
flex-direction:row; // 기본적인 정령 방향 왼쪽 상단에서 오른쪽 상단으로 아이템을 정렬
flex-direction:row-reverse; //오른쪽 상단 에서 왼쪽 상단으로 아이템을 정렬
flex-direction:column;// 좌측 상단에서 좌측 하단으로 정렬
flex-direction:column-reverse;// 좌측 하단에서 좌측 상단으로 정렬
flex-wrap:nowrap; //기본값으로 아이템들이 많아져도 다음 줄로 내려주지 않음
}
아이템이 자동적으로 왼쪽에서 오른쪽으로 정렬됨(박스모델도 정렬됨.. 신기)
```