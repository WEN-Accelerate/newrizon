/** Sample of the shareable Earthizen Pass every new member receives. */
export default function BoardingPass({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-panel2 ${className}`}>
      <div className="flex items-center justify-between border-b border-dashed border-line bg-panel px-6 py-3">
        <span className="eyebrow !text-[10px] text-saffron">Earthizen Pass</span>
        <span className="eyebrow !text-[10px] text-comms">NO. EZ-04721</span>
      </div>
      <div className="grid gap-6 px-6 py-6 sm:grid-cols-[1fr_auto]">
        <div className="space-y-4">
          <div>
            <p className="eyebrow !text-[10px] text-comms">Earthizen</p>
            <p className="text-xl font-bold">[Your name here]</p>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="eyebrow !text-[10px] text-comms">Role</p>
              <p className="font-mono text-sm text-teal">STUDENT</p>
            </div>
            <div>
              <p className="eyebrow !text-[10px] text-comms">Programme</p>
              <p className="font-mono text-sm text-teal">ORBIT</p>
            </div>
            <div>
              <p className="eyebrow !text-[10px] text-comms">Citizenship</p>
              <p className="font-mono text-sm text-saffron">EARTH</p>
            </div>
          </div>
        </div>
        {/* barcode */}
        <div className="flex items-end gap-[3px]" aria-hidden="true">
          {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 3, 4, 1].map((w, i) => (
            <span key={i} className="inline-block bg-star" style={{ width: w, height: 48, opacity: 0.85 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
