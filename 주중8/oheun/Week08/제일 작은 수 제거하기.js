/*
통과 여부 : 통과
시간 : 30분
점수 : +10

💡 sort, reverse 안됨
테스트1 〉실패 (25.28ms, 37.2MB) 라서

💡 삼항연산자 쓰니까 시간이 11초 단축
테스트 1 〉	실패 (14.72ms, 37.4MB)

💡 map으로 내림차순 => 은 불가한데 실수함.
테스트 1 〉	실패 (1.55ms, 37MB)

💡 sort가 안되는 듯 해서 정렬 방법 뒤짐. 못 찾음. 그냥 작은 수 찾아서 제거
*/

function solution(arr) {
    // let answer = arr.sort((x, y) => {return y-x;}).slice(0, arr.length-1);
    let index = arr.indexOf(Math.min(...arr));
    let remove = arr.splice(index,1);
    return arr.length === 0? [-1]:arr;
}