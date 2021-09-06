# 📋 Complex Layout 만들기
![complexlayout](https://user-images.githubusercontent.com/76253952/132164692-c9ee28ce-f9ef-458f-b4f5-406eea1c3f6e.PNG)

> <b>Ext.js4 를 이용하여 Complex Layout 화면 개발</b>

---

## 0. MVC 패턴 기반
### 📌 MVC 란 ?
<b>Model, View, Controller 의 약자로 어플리케이션을 3가지의 역할로 구분한 개발 방법론 입니다. </b> <br>
사용자 인터페이스로부터 로직을 분리하여 유지보수가 용이하며 유연성과 확장성이 높다는 장점을 가지고 있지만, <br>
Model과 View의 의존성이 완전히 분리될 수 없기 때문에 구조가 복잡해 질 수 있다는 단점 또한 가지고 있습니다. <br>
→ 이에따라 Model과 View의 완벽한 분리가 이루어질 수 있으면서 MVC의 장점을 가지고 MVP 혹은 MVVM이라는 패턴을 사용하기도 합니다. <br>

### 💡 ExtJS 에서의 MVC 패턴
> ExtJS4에서의 MVC는 다른 아키텍처들과는 약간 다른 형태를 보입니다.


<b> Model </b>
- Model은 필드와 데이터에 대한 콜렉션 입니다.
- Ext.js 에서의 데이터를 표현 하는 단위는 Model 입니다.
- 일반적으로 데이터를 그리드와 같이 다른 컴포넌트에 보여주기 위해 Store와 함께 사용 됩니다.

<b> View </b>
- View는 컴포넌트의 모든 타입을 일컫습니다. (grids, tres, panel 등이 모두 view 입니다.

<b> Controllers </b>
- 앱을 동작 시키는 코드의 대부분을 저장하는 공간 입니다.
- view를 렌더링 하거나, Model을 초기화 하거나 다른 app 로직 처리 등이 포함 됩니다.

<br>

> ### __들어가기에 앞서서, 해당 과제는 View와 Controller 만 사용했습니다.__
  
<br>
  
---

## 1. 폴더 구조 

```bash
├── app
│   ├── controller
│   │   └── ComplexLayout.js 
│   └── view
│       ├── icons // accordion에 사용 할 image들이 들어있음
│       ├── Center.js
│       ├── East.js
│       ├── EastGrid.js
│       ├── North.js
│       ├── South.js
│       └── West.js
│
├── app.js
└── index.html
``` 

---

## 2. 각 구역의 주요 기능

### 0) Default
- 전체적으로 layout: 'border' 를 이용하여 틀을 잡아줍니다.
  - 이때, 구역은 North, East, South, West, Center 로 나뉘어집니다.

### 1) North
- 일반적으로 Menu, Toolbar, 광고 를 위한 구역 입니다.

### 2) East
- 해당 과제에서는 Tab으로 구성하여 첫번째 Tab에는 달력을 사용하였습니다.
- 두번째 탭은 close가 가능하며, Property Grid를 사용하였습니다.
- 각 탭 마다 있는 toolbar의 button은 클릭하면 "테스트" 라는 tooltip 이 나옵니다.

### 3) South
- 일반적으로 정보용으로, 상태 표시줄용으로도 사용할 수 있습니다.

### 4) West
- Accordion 을 사용하였습니다.

### 5) Center
- 내용을 나타내는 구역 입니다.
- 하단의 Add Tab 버튼을 클릭 하면 close 가 가능한 Tab들이 추가 됩니다.
- Center Panel의 "Toggle The west region" 이라는 a태그를 클릭하면 West 패널이 Toggle 됩니다.


---

## 3. 업데이트 내역

- 0.0.1
  - 기본적인 View, Controller 작성



---




