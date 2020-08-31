import React from 'react';
import { Grid } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import MarkdownEditor from './MarkdownEditor';
import emoji from 'emoji-dictionary';

function App() {
  let content = 
`
# 0. Emoji 테스트 :smile: :sunglasses: :+1:

# 1. LaTeX 테스트

LaTeX로 입력한 수식이 다른 요소와 잘 섞여 출력되는지 테스트합니다.

**Prove that a union of any two countably infinite sets is countably infinite.**

countably infinite한 두 집합을 $A$, $B$라고 하자. 이제 아래 과정을 따라 명제를 증명한다.

집합 $A$와 $B$가 countably infinite하기 때문에 두개의 전단사 함수 $f:A\\rightarrow N$와 $g: B \\rightarrow N$가 존재한다. 이 때 함수 $h: A\\cup B \\rightarrow N$를 아래와 같이 정의하자.

$$
h(x)=  \\begin{cases}
          2f(x) & {(x \\in A)} \\\\
          2g(x)+1 & {(x \\in B)} \\\\
      \\end{cases}
$$

이제 임의의 두 원소 $c, d \\in A \\cup B$에 대하여 $h(c)=h(d)$라고 가정하자. 그렇다면 아래와 같은 방법으로 함수 $h$가 one-to-one 함수라는 것을 증명할 수 있다.

**(중략...)**

# 2. 헤더 테스트

헤더가 정상적으로 출력되는지 테스트합니다.

# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

# 3. BlockQuote 테스트

\`\`\`>\`\`\` 문자를 이용한 인용이 정상적으로 출력되는지 테스트합니다.

> This is a first blockqute.
>> This is a second blockqute.
>>> This is a third blockqute.

> ### This is a H3
> * List
>>\`\`\`
>>code
>>\`\`\`

# 4. 목록 테스트

목록이 정상적으로 출력되는지 테스트합니다.

1. 첫번째
2. 두번째
3. 세번째

* 빨강
  * 녹색
    * 파랑

+ 빨강
  + 녹색
    + 파랑

- 빨강
  - 녹색
    - 파랑

* 1단계
  - 2단계
    + 3단계
      + 4단계

# 5. 코드 테스트

코드 블럭이 정상적으로 출력되는지 테스트합니다.

This is a normal paragraph:

    This is a code block.

end code block.

\`\`\`
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
\`\`\`

# 6. 수평선 테스트

수평선이 정상적으로 출력되는지 테스트합니다.

* * *

***

*****

- - -

---------------------------------------

# 7. 링크 테스트

링크가 정상적으로 출력되는지 테스트합니다.

Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"

# 8. 강조 테스트

강조가 정상적으로 출력되는지 테스트합니다.

* *single asterisks*
* _single underscores_
* **double asterisks**
* __double underscores__
* ~~cancelline~~

# 9. 이미지 삽입 테스트

이미지가 정상적으로 출력되는지 테스트합니다.

![screensh](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

# 10. 표 테스트

표가 정상적으로 출력되는지 테스트합니다.

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

`;

  return (
    <Grid container direction="column" className="app_root">
      <MarkdownEditor className="editor" contents={content}></MarkdownEditor>
    </Grid>
  );
}

export default App;
