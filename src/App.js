import React from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownViewer from './MarkdownViewer'

function App() {
  let content = 
`
# 샘플 문제 지문

Prove that a union of any two countably infinite sets is countably infinite.

# 샘플 풀이 예시

countably infinite한 두 집합을 $A$, $B$라고 하자. 이제 아래 과정을 따라 명제를 증명한다.

## $A \\cap B = \\varnothing$일 때,

  집합 $A$와 $B$가 countably infinite하기 때문에 두개의 전단사 함수 $f:A\\rightarrow N$와 $g: B \\rightarrow N$가 존재한다. 이 때 함수 $h: A\\cup B \\rightarrow N$를 아래와 같이 정의하자.

  $$
  h(x)=  \\begin{cases}
            2f(x) & {(x \\in A)} \\\\
            2g(x)+1 & {(x \\in B)} \\\\
        \\end{cases}
  $$

  이제 임의의 두 원소 $c, d \\in A \\cup B$에 대하여 $h(c)=h(d)$라고 가정하자. 그렇다면 아래와 같은 방법으로 함수 $h$가 one-to-one 함수라는 것을 증명할 수 있다.

  $c \\in A$이고, $d \\in A$일 때, $h(c)=h(d)$에 식을  대입하면 $2f(c)=2f(d)$와 같다. 이 등식에서 양변을 2로 나누면 $f(c)=f(d)$가 된다. $f$가 전단사 함수이므로 $c=d$이다.

  $c \\in A$이고, $d \\in B$인 경우는 존재하지 않는다. 그 이유는, $h(c)=h(d)$에 식을  대입하면 $2f(c)=2g(d)+1$가 되는데, 양변에 $2g(d)$를 빼고 양변을 2로 나누면 $f(c)-g(d)=\\frac{1}{2}$를 얻을 수 있다. 그런데 $f, g$가 정수 집합을 공역으로 가지므로 이런 경우는 있을 수 없다.

  $c \\in B$이고, $d \\in B$일 때, $h(c)=h(d)$에 식을  대입하면 $2g(c)+1=2g(d)+1$와 같다. 이 등식에서 양변에 1을 빼고 양변을 2로 나누면 $g(c)=g(d)$가 된다. $g$가 전단사 함수이므로 $c=d$이다.

  $c \\in B$이고, $d \\in A$인 경우는 존재하지 않는다. 그 이유는, $h(c)=h(d)$에 식을  대입하면 $2g(c)+1=2f(d)$가 되는데, 양변에 $2g(c)$를 빼고 양변을 2로 나누면 $\\frac{1}{2}=f(d)-g(c)$를 얻을 수 있다. 그런데 $f, g$가 정수 집합을 공역으로 가지므로 이런 경우는 있을 수 없다.

  이렇게 임의의 두 원소 $c, d \\in A \\cup B$에 대하여 $h(c)=h(d)$라고 가정하면 항상 $c=d$가 성립하므로 h는 one-to-one 함수이다. 따라서 $A\\cup B$는 countably infinite하다.

## $A \\cap B \\not= \\varnothing$일 때,

  이런 경우 $A \\cup B = (A-B) \\cup (A \\cap B) \\cup (B-A)$로 분리해서 생각하면 3개의 집합은 모두 disjoint하다. 이것들이 모두 무한 집합이라면 이전에 1번에서 증명한 내용을 두 번 적용하여 $A\\cup B$이 countably infinite하다는 것을 쉽게 합리화할 수 있다. 그리고 하나 이상이 유한 집합인 경우에는 countably infinite한 집합과 countably하지만 not infinite 한 집합을 합집합하면 countable의 정의에 의해 자명하게 countably infinite한 집합을 얻을 수 있으므로 이들을 고려하지 않고 무한한 집합만 생각하여 1번 증명을 적용하면 증명할 수 있다.

# 이미지 삽입 테스트

![screensh](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)
`;

  return (
    <MarkdownViewer className="viewer" source={content}/>
  );
}

export default App;