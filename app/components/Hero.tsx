export default function Hero() {
  return (
    <section className="bg-black text-white text-center py-40 px-4">
      <h2 className="text-4xl font-bold mb-4">영화, 시리즈를 무제한으로</h2>
      <p className="text-base mb-8 text-gray-600">무엇이든 즐길 수 있는 공간</p>
      <div className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="이메일 주소"
          className="px-4 py-3 rounded bg-gray-800 text-white w-72"
        />
        <button className="bg-red-600 text-white px-6 py-3 rounded">
          Start
        </button>
      </div>
    </section>
  );
}

// hero section with title, description, email input and start button
// title: 영화, 시리즈를 무제한으로
// description: 언제든지 해지할 수 있습니다.
// email input placeholder: 이메일 주소
// start button text: Start
