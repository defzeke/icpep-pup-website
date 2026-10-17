export function TerminalBlock() {
  return (
    <pre className="max-w-xl overflow-x-auto border border-carbon bg-obsidian p-4 font-mono text-label whitespace-pre-wrap break-words text-off-white sm:p-5 sm:text-body sm:whitespace-pre">
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