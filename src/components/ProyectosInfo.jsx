import { useState, useEffect } from "react";

const ProyectosInfo = ({ info, close }) => {
    const [activeImg, setActiveImg] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-sm">
            <div
                className="relative w-full bg-[#0a0a0a] shadow-2xl min-h-screen overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Global Glow Effects */}
                <div
                    className="absolute top-0 right-0 w-[900px] h-[900px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/3"
                    style={{
                        backgroundColor: info.colortext,
                        opacity: 0.60,
                        filter: "blur(120px)"
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[700px] h-[700px] pointer-events-none rounded-full translate-y-1/2 -translate-x-1/3"
                    style={{
                        backgroundColor: info.colortext,
                        opacity: 0.40,
                        filter: "blur(100px)"
                    }}
                />
                {/* Glow central sutil */}
                <div
                    className="absolute top-1/2 left-2/3 w-[600px] h-[600px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{
                        backgroundColor: info.colortext,
                        opacity: 0.50,
                        filter: "blur(150px)"
                    }}
                />

                <button
                    onClick={close}
                    className="absolute top-8 right-8 z-30 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>

                {/* Top: Header Area (Dark with Glow) */}
                <div className="w-full p-4 shrink-0 relative z-10">
                    <div
                        className="w-full h-80 min-h-[380px] rounded-[32px] flex flex-col justify-center items-center relative overflow-hidden border border-white/5 bg-white/[0.02]"
                        style={{ backgroundColor: info.colortext || "#3b82f6" }}
                    >
                        {/* Decorative Elements - subtle now */}
                        <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full border-[20px] border-white/5 blur-sm"></div>

                        <div className="relative z-10 text-center px-4">
                            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-sm">
                                {info.empresa || info.title}
                            </h1>
                            <span
                                className="text-xl font-light tracking-[0.2em] uppercase"
                                style={{ color: "#FFFFFF" }}
                            >
                                {info.type}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom: Content Area */}
                <div className="relative z-10">
                    {/* Content Grid */}
                    <div className="p-10 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Left Column: Title & Details */}
                        <div className="md:col-span-1 flex flex-col gap-8">
                            <div>
                                <h2
                                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                                    style={{ color: info.colortext }}
                                >
                                    {info.title}
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className=" text-xs font-bold uppercase tracking-wider mb-2" style={{ color: info.colortext }}>CATEGORÍA</h3>
                                        <p className="text-gray-200 font-medium text-lg">{info.type}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[#555a7a] text-xs font-bold uppercase tracking-wider mb-2" style={{ color: info.colortext }}>AÑO</h3>
                                        <p className="text-gray-200 font-medium text-lg">{info.año}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[#555a7a] text-xs font-bold uppercase tracking-wider mb-3" style={{ color: info.colortext }}>STACK</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {info.tags && info.tags.map((tag, index) => (
                                                <span key={index} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-4">
                                {info.url && <button
                                    className="w-full md:w-auto px-8 py-4 rounded-full font-bold text-white transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3 text-lg"
                                    style={{ backgroundColor: info.colortext || "#3b82f6" }}
                                >
                                    Acceder al sitio
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                </button>}
                            </div>
                        </div>

                        {/* Right Column: Description */}
                        <div className="md:col-span-2 flex flex-col justify-start">
                            <div className="prose prose-invert prose-lg max-w-none text-gray-200 leading-relaxed text-pretty">
                                <p className="text-xl leading-8">{info.textdes}</p>
                                {info.testdes && <p className="mt-6 text-xl leading-8">{info.testdes}</p>}
                            </div>
                        </div>
                    </div>
                    {/* Gallery Section */}
                    <div className="px-10 md:px-14 pb-14 mt-4">
                        <p className="text-[#555a7a] text-xs font-bold uppercase tracking-wider mb-6">
                            GALERÍA DEL PROYECTO
                        </p>

                        {info.imgInfo && info.imgInfo.length > 0 && (
                            <>
                                {/* Main Carousel */}
                                <div className="relative w-full rounded-2xl overflow-hidden mb-4" style={{ height: "480px" }}>
                                    <img
                                        src={info.imgInfo[activeImg]}
                                        alt={`Imagen ${activeImg + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Nav buttons */}
                                    <button
                                        onClick={() => setActiveImg(i => (i - 1 + info.imgInfo.length) % info.imgInfo.length)}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                    </button>
                                    <button
                                        onClick={() => setActiveImg(i => (i + 1) % info.imgInfo.length)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </button>
                                    {/* Counter */}
                                    <span className="absolute bottom-4 right-4 text-sm text-white bg-black/50 px-3 py-1 rounded-full">
                                        {activeImg + 1} / {info.imgInfo.length}
                                    </span>
                                </div>

                                {/* Thumbnails */}
                                <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${info.imgInfo.length}, 1fr)` }}>
                                    {info.imgInfo.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImg(index)}
                                            className={`relative rounded-xl overflow-hidden h-24 transition-all ${activeImg === index
                                                ? "ring-2 opacity-100"
                                                : "opacity-50 hover:opacity-80"
                                                }`}
                                            style={{ ringColor: info.colortext }}
                                        >
                                            <img src={img} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
                                            {activeImg === index && (
                                                <div
                                                    className="absolute inset-0 opacity-20"
                                                    style={{ backgroundColor: info.colortext }}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProyectosInfo;