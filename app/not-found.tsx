import Link from "next/link";

export default function NotFound() { return <div className="container-page flex min-h-[60vh] flex-col items-start justify-center"><p className="eyebrow">404</p><h1 className="page-title">페이지를 찾을 수 없습니다.</h1><p className="lead">요청한 페이지가 존재하지 않거나 이동되었습니다.</p><Link href="/" className="button-primary mt-8">홈으로 돌아가기</Link></div>; }
