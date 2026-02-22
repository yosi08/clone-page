export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black">
      <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
      <button className="bg-red-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </nav>
  );
  // 네브바 구축을 위한 컴포넌트입니다. Tailwind CSS를 사용하여 스타일링을 적용하였습니다. 네브바는 검은색 배경에 빨간색 텍스트로 "NETFLIX"라는 제목과 오른쪽에 로그인 버튼이 있습니다.
}
