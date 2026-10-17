export function TerminalBlock() {
  return (
    <pre className="max-w-xl overflow-x-auto border border-carbon bg-obsidian p-5 font-mono text-body text-off-white">
      <span className="text-light-orange">$</span> ./join --chapter icpep-se-pup-manila
      {"\n"}
      <span className="text-off-white/60">&gt; plan ......... ok</span>
      {"\n"}
      <span className="text-off-white/60">&gt; build ........ ok</span>
      {"\n"}
      <span className="text-off-white/60">&gt; deploy ....... ok</span>
      {"\n"}
      <span className="text-off-white/60">&gt; repeat .......</span>{" "}
      <span className="text-light-orange">∞</span>
    </pre>
  );
}