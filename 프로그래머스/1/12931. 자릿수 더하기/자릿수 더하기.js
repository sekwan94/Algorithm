function solution(n) {
    var answer = 0;

    var digits = n.toString().split('');

    for (var i = 0; i < digits.length; i++) {
        answer += parseInt(digits[i]);
    }

    return answer;
}


console.log(solution(123));