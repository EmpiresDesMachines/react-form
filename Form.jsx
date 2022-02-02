import React from 'react';

function Form() {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [userInfo, setUserInfo] = React.useState({
    login: '',
    password: '',
  });

  const [authInfo, setAuthInfo] = React.useState({});

  const [textarea, setTextarea] = React.useState('');
  const changeTextarea = (e) => setTextarea(e.target.value);

  const [select, setSelect] = React.useState('');

  const [checkbox, setCheckbox] = React.useState({
    first: false,
    second: true,
  });

  const [radio, setRadio] = React.useState('other');

  const radioChange = (e) => setRadio(e.target.value);

  const sendForm = (e) => {
    e.preventDefault();
    alert(`${userInfo} ${authInfo}`);
  };

  return (
    <form onSubmit={sendForm}>
      <div style={{ padding: '40px', border: '1px solid red' }}>
        <h2>Variant #1</h2>
        <label>
          user:{' '}
          <input
            type="text"
            placeholder="test input"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <label>
          password:{' '}
          <input
            type="password"
            placeholder="test input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <div style={{ padding: '40px', border: '1px solid red' }}>
        <h2>Variant #2</h2>
        <label>
          user:{' '}
          <input
            type="text"
            placeholder="test input"
            value={userInfo.login}
            onChange={(e) => setUserInfo({ ...userInfo, login: e.target.value })}
          />
        </label>
        <label>
          password:{' '}
          <input
            type="password"
            placeholder="test input"
            value={userInfo.password}
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          />
        </label>
      </div>

      <div style={{ padding: '40px', border: '1px solid red' }}>
        <h2>Variant #3</h2>
        <label>
          user:{' '}
          <input
            type="text"
            name="login"
            placeholder="test input"
            value={authInfo.login}
            onChange={(e) =>
              setUserInfo((oldAuthInfo) => ({ ...oldAuthInfo, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label>
          password:{' '}
          <input
            type="password"
            placeholder="test input"
            name="password"
            value={authInfo.password}
            onChange={(e) =>
              setAuthInfo((oldAuthInfo) => ({ ...oldAuthInfo, [e.target.name]: e.target.value }))
            }
          />
        </label>
      </div>

      <div>
        <textarea
          name="textarea"
          rows="10"
          placeholder="textarea?"
          value={textarea}
          onChange={changeTextarea}></textarea>
      </div>

      <label>select: {select}</label>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value=""></option>
        <option value="react">react</option>
        <option value="vue">vue</option>
        <option value="angular">angular</option>
      </select>

      <label>
        checkbox1:{' '}
        <input
          type="checkbox"
          name="first"
          checked={checkbox.first}
          onChange={(e) =>
            setCheckbox((prev) => ({ ...prev, [e.target.name]: !prev[e.target.name] }))
          }
        />
      </label>

      <label>
        checkbox2:{' '}
        <input
          type="checkbox"
          name="second"
          checked={checkbox.second}
          onChange={(e) =>
            setCheckbox((prev) => ({ ...prev, [e.target.name]: !prev[e.target.name] }))
          }
        />
      </label>

      <div>
        <h2>radio</h2>
        <label>
          {' '}
          male:
          <input
            type="radio"
            name="gender"
            value="male"
            checked={radio === 'male'}
            onChange={radioChange}
          />
        </label>
        <label>
          {' '}
          female:
          <input
            type="radio"
            name="gender"
            value="female"
            checked={radio === 'female'}
            onChange={radioChange}
          />
        </label>
        <label>
          {' '}
          other:
          <input
            type="radio"
            name="gender"
            value="other"
            checked={radio === 'other'}
            onChange={radioChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export { Form };
