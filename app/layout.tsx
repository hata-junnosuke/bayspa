import './globals.css';
// 1. ページのメタデータ
export const metadata = {
  title: 'bayspa',
  description: 'Cheer for Baystars',
}

// 2. ページのレイアウト
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* 3. ページやレイアウトの内容を表示 */}
      <body>{children}</body>
    </html>
  )
}
