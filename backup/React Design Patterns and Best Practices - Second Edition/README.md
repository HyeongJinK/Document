```jsx
let button;

if (isLoggedIn) { 
    button = <LogoutButton />; 
} 

return (<div>{button}</div>);
------------------------------------------------
<div>
    {isLoggedIn && <LoginButton />} 
</div>
```

```jsx
let button;

if (isLoggedIn) { 
  button = <LogoutButton />;
} else { 
  button = <LoginButton />;
} 

return<div>{button}</div>;
------------------------------------------------
<div>
    {isLoggedIn ? <LogoutButton /> : <LoginButton />} 
</div>
```

커링

```jsx
const add = (x, y) => x + y; // (1)
const add = x => y => x + y; // (2)
// 사용방법
const add1 = add(1);         
add1(2); // 3
add1(3); // 4
```

### prop

```jsx
import PropTypes from 'prop-types';

const Button = ({ text }) => <button>{text}</button>;

Button.propTypes = { 
	text: PropTypes.string
};
Button.propTypes = { 
	text: PropTypes.string.isRequired
};
```

```jsx
import { shape, string } from 'prop-types';

const Profile = ({ user }) => ( 
<div>{user.name} {user.surname}</div>
  );

Profile.propTypes = { 
	user: shape(
	{ 
		name: string.isRequired, 
		surname: string
	}).isRequired
};

user: shape(
	{ 
		age: (props, propName) => { 
			if (!(props[propName] > 0 && props[propName] < 100)) { 
				return new Error(`${propName} must be between 1 and 99`);
	    } 
			return null;
    }
	}
)
```

```jsx
<button className="btn">
	<img src="..." alt="..." />
	<span>Click me!</span>
</button> 

Failed prop type: Invalid prop `children` of type `object` supplied to `Button`, expected `array`.

import { oneOfType, array, element } from 'prop-types';

Button.propTypes = { 
	children: oneOfType([ 
		array, 
		element
  ])
};
```

### 명명 규칙

이 규칙은 엄격하지는 않지만 React 커뮤니티에서 널리 사용되는 모범 사례로 컴포넌트 이름 Container끝에 추가 Container하고 프레젠테이션 이름에 원래 이름을 부여합니다.