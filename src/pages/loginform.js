import React, { useState } from 'react';
import login from '../services/loginService.js';

const LoginForm = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [redirectURL, setRedirectURL] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const token = await login(loginId, password); // 로그인 함수 호출
      console.log('로그인 성공');
      // 로그인 성공 후 리다이렉트 또는 다른 작업 수행
    } catch (error) {
      console.error('로그인 에러:', error);
      // 에러 처리 로직 추가
    }
  };

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>로그인</h2>
      </div>
      <form onSubmit={handleLogin}>
        <input type="hidden" name="redirectURL" value={redirectURL} />

        <div>
          <label htmlFor="loginId">로그인 ID</label>
          <input
            type="text"
            id="loginId"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col">
            <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={() => window.location.href = '/main'}>
              로그인
            </button>
          </div>
          <div className="col">
            <button
              className="w-100 btn btn-secondary btn-lg"
              onClick={() => window.location.href = '/'}
              type="button"
            >
              취소
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
