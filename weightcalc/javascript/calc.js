/* ## (**과제**)**적정 체중 구하는 테스트기 만들기**

**`적정체중 = (본인신장-100)*0.9`**

**적정 체중 구하는 계산기 만들기**

계산식) **적정체중 = (본인신장-100)*0.9**

변수명 예) **userHeight, userWeight, goals, result, normal_w**

- +CSS 디자인은 심미적으로 자유롭게 표현하세요.
- 현재 키와 몸무게를 자유롭게 입력하고
- 버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기

최종목표 **결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.** */

//1.본인체중 변수 설정 
const bodyWeight = document.querySelector('#weightNum')
//2.본인신장 변수 설정
const bodyheight = document.querySelector('#heightNum')
//3.버튼 변수 설정
const clacBtn = document.querySelector('#clacBtn')
//4.result(p) 결과 값 변수 설정
const result = document.querySelector('.result')

clacBtn.addEventListener('click',function(){
    const clacWeight = (bodyheight.value-100)*0.9 //적정체중
    console.log(clacWeight, typeof clacWeight)
    //5.버튼을 눌렀을 때 적정체중이 계산되도록 변수 설정
    let allClac = Number(bodyWeight.value) - clacWeight 
    console.log(allClac, typeof allClac) //초과체중 계산식
    //6. 초과체중 계산식
    result.innerHTML = `적정 몸무게는${clacWeight}Kg 이며,<br> ${allClac}kg 초과되어버렸네요..`
    //7. 6번 총 계산 변수를 result(p) 결과 값 변수에 대입 [적정무게는 ()kg이며, ()kg 초과되셨습니다. ] 
    //8. 7번 () 값에 알맞은 변수 대입
})

