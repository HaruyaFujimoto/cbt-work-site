import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h2>選んでみてください</h2>
      <button>
        <Link to={`/how-to-use`}>はじめましての方</Link>
      </button>
      <button>
        <Link to={`/self-monitoring`}>セルフモニタリング
          <span>まずはここから</span>
        </Link>
      </button>
      <h2>認知を振り返ってみる (手法)</h2>
      <button>
        <Link to={`/column-technique`}>コラム法</Link>
      </button>
      <button>
        <Link to={`/the-work-of-byron-katie`}>バイロン・ケイティのワーク</Link>
      </button>
    </>
  )
}
