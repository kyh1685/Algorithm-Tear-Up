/**
 * 통과
 * 3분
 * +2
 * 
테스트 1 〉	통과 (0.07ms, 33.6MB)
테스트 2 〉	통과 (0.09ms, 33.7MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.6MB)
테스트 5 〉	통과 (0.10ms, 33.5MB)
테스트 6 〉	통과 (0.08ms, 33.6MB)
테스트 7 〉	통과 (0.05ms, 33.6MB)
테스트 8 〉	통과 (0.07ms, 33.6MB)
테스트 9 〉	통과 (0.07ms, 33.5MB)
테스트 10 〉	통과 (0.08ms, 33.8MB)
테스트 11 〉	통과 (0.05ms, 33.7MB)
테스트 12 〉	통과 (0.10ms, 33.5MB)
 */

function solution(s) {
    let answer = s.split(' ').sort((a, b)=> a-b);
    return answer[0] +' '+ answer[answer.length-1];
}