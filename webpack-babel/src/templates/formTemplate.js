export const formElement = `<form class="bg-white shadow-md rounded px-8 pt-6 m-5 pb-8 mb-4 w-6/12 self-center" id="form">
      <div class="mb-4">
        <label class="block text-gray-700 text-md font-bold mb-2" for="title">
          제목
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="제목을 입력해주세요">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-md font-bold mb-2" for="content">
          내용
        </label>
        <textarea class="shadow appearance-none border rounded py-2 px-3 form-textarea mt-1 block w-full" rows="3" id="content" placeholder="내용을 입력해주세요."></textarea>
        </div>
      <div class="flex items-center justify-end">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          작성하기
        </button>
      </div>
    </form>
    `;
