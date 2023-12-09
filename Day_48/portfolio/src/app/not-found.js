import Image from "next/image";
import Link from "next/link";
import notFound404 from "../../public/assets/images/404.jpg";
const NotFound = () => {
  return (
    <div>
      <Image
        src={notFound404}
        alt="404 not found"
        style={{
          maxWidth: "100vw",
          height: "auto",
        }}
      />
      <h2>Lạc đường rồi. Về trang chủ ngay</h2>
      <Link
        href={"/"}
        style={{
          color: "#fff",
          backgroundColor: "red",
          padding: "20px",
          display: "inline-block",
          marginTop: "30px",
          fontSize: "24px",
          textDecoration: "none",
          fontWeight: "900",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Quay về bờ
      </Link>
    </div>
  );
};

export default NotFound;
