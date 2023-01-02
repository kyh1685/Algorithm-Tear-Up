/* 걸린시간 10분 정확성: 100 */
/* 정확성 테스트
테스트 1 〉	통과 (0.04ms, 32.9MB)
테스트 2 〉	통과 (0.04ms, 33.3MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.3MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.3MB)
테스트 7 〉	통과 (0.12ms, 33.3MB)
테스트 8 〉	통과 (0.12ms, 33.4MB)
테스트 9 〉	통과 (0.12ms, 33.4MB)
테스트 10 〉	통과 (0.13ms, 33.3MB)
테스트 11 〉	통과 (0.12ms, 33.4MB)
테스트 12 〉	통과 (0.66ms, 33.4MB)
테스트 13 〉	통과 (0.45ms, 33.4MB)
테스트 14 〉	통과 (0.39ms, 33.4MB)
테스트 15 〉	통과 (0.22ms, 33.4MB)
테스트 16 〉	통과 (63.87ms, 37.2MB)
테스트 17 〉	통과 (63.53ms, 36.9MB)
테스트 18 〉	통과 (48.61ms, 37.1MB)
테스트 19 〉	통과 (5.93ms, 33.8MB)
테스트 20 〉	통과 (0.75ms, 33.8MB)
*/

function solution(nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i++){
				// 이미 추가된 폰켓몬이 아니고 n/2 를 채우지 못했다면
        if(!arr.includes(nums[i]) && arr.length < nums.length / 2)
            arr.push(nums[i]); // 추가
    }
    return arr.length;
}