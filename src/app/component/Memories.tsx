import Image from "next/image";

const Memories = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100 text-gray-800">
      <div className="max-w-3xl text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Kỷ niệm đáng nhớ</h2>
        <p className="text-lg mb-8">
          Hãy cùng nhìn lại những khoảnh khắc đáng nhớ trong suốt hành trình học
          tập của chúng ta.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          <Image
            src="/memory1.jpg" // Đảm bảo bạn có hình ảnh này trong thư mục public
            alt="Memory 1"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/memory2.jpg" // Đảm bảo bạn có hình ảnh này trong thư mục public
            alt="Memory 2"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/memory3.jpg" // Đảm bảo bạn có hình ảnh này trong thư mục public
            alt="Memory 3"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/memory4.jpg" // Đảm bảo bạn có hình ảnh này trong thư mục public
            alt="Memory 4"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/memory5.jpg" // Đảm bảo bạn có hình ảnh này trong thư mục public
            alt="Memory 5"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/memory6.jpg" // Đảm bảo bạn có hình ảnh này trong thư mục public
            alt="Memory 6"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Memories;
