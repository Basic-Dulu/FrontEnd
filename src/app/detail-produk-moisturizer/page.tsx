'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function BasicSkincareMoisturizer() {
    const router = useRouter();

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} bg-[#E6EEFC] pb-12 lg:pb-20 overflow-hidden`}
            >
                {/* Breadcrumbs */}
                <nav className="mt-8 ml-4 lg:ml-8 text-xs lg:text-sm space-x-2">
                    <a href="/basic-skincare" className="hover:underline text-[#7092CF]">
                        Basic Skincare
                    </a>
                    <span>/</span>
                    <a
                        href="/produk-basic-skincare"
                        className="hover:underline text-[#7092CF]"
                    >
                        Produk Basic Skincare
                    </a>
                    <span>/</span>
                    <a
                        href="/detail-rpoduk-moisturizer"
                        className="font-bold hover:underline text-[#7092CF]"
                    >
                        Moisturizer
                    </a>
                </nav>

                {/* Title Section */}
                <div className="mt-10 lg:mt-16">
                    <div
                        className="hidden md:hidden lg:block absolute bg-[#FFF6ED] h-70 w-70 top-39 right-72"
                        style={{
                            clipPath: 'ellipse(140px 140px at center bottom)',
                        }}
                    ></div>
                    <div className="absolute right-77 top-47">
                        <img
                            src="/Product-Moisturizer.png"
                            alt="Moisturizer"
                            className="hidden lg:block w-61 h-auto drop-shadow-[5px_5px_0px_rgba(0,0,0,0.15)]"
                        />
                    </div>
                    <div className="text-white bg-gradient-to-r from-[#7293D0] to-[#B5CBF0] mx-5 lg:mx-45 mb-8 lg:mb-16 rounded-2xl py-7 px-7 lg:py-10 lg:px-14">
                        <img
                            src="/Product-Moisturizer.png"
                            alt="Moisturizer"
                            className="block lg:hidden w-30 h-auto drop-shadow-[5px_5px_0px_rgba(0,0,0,0.15)] pb-3"
                        />
                        {/* Title */}
                        <h1 className="text-2xl lg:text-4xl font-bold lg:pb-2">Moisturizer</h1>
                        {/* Slogan */}
                        <p className="lg:text-2xl lg:w-sm">
                            Keeps Your Skin Hydrated!
                        </p>
                        {/* Product Description */}
                        <p className="text-xs lg:text-lg lg:w-3xl mt-2">
                            Moisturizer atau pelembab adalah produk perawatan
                            kulit yang menghidrasi kulit dengan menyerap air.
                            Pelembap membantu menjaga fungsi lapisan kulit,
                            memperbaiki tekstur kulit, dan melindungi kulit dari
                            kerusakan lingkungan.
                        </p>
                    </div>
                </div>

                {/* Benefit Section */}
                <div className="mx-5 lg:mx-45">
                    <div className="bg-[#7092CF] md:h-10 py-2 lg:py-7 w-22 lg:w-34 text-sm md:text-xl flex items-center text-center justify-center font-semibold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl">
                        Manfaat
                    </div>
                    <div className="bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl py-4 px-5 lg:py-8 lg:px-10">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            {/* Swirl Element */}
                            <img
                                src="/Elements-20.png"
                                alt="Swirl"
                                className="absolute hidden lg:block w-76 h-auto left-42 pb-30"
                            />

                            {/* Mascot */}
                            <img
                                src="/Pink-3.png"
                                alt="Mascot"
                                className="absolute hidden lg:block w-79 h-auto -scale-x-100 pt-32 left-57"
                            />

                            {/* Benefit List */}
                            <div className="flex flex-col gap-3 lg:gap-4 lg:w-4xl text-xs lg:text-lg lg:ml-88">
                                {[
                                    'Melembabkan kulit',
                                    'Melindungi lapisan kulit',
                                    'Memperbaiki tekstur kulit',
                                    'Mempersiapkan kulit untuk tabir surya',
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#D5E4FF] text-black px-6 lg:px-8 py-4 rounded-full"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to Use Section */}
                <div className="mx-5 lg:mx-45 mt-8 lg:mt-16">
                    <div className="bg-[#7092CF] md:h-10 py-2 lg:py-7 w-40 lg:w-60 text-sm md:text-xl flex items-center text-center justify-center font-semibold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl">
                        Cara Penggunaan
                    </div>
                    <div className="bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl py-5 px-5 lg:py-12 lg:px-10">
                        <div className="relative">
                            {/* Dashed vertical line */}
                            <div className="absolute top-[30px] left-[14px] lg:left-[24px] h-[calc(100%-40px)] border-l-2 border-dashed border-[#7092CF] z-0"></div>

                            {/* Steps */}
                            <div className="flex flex-col gap-3 lg:gap-6 relative z-10">
                                {[
                                    'Bersihkan wajah secara menyeluruh dan keringkan dengan menepuk-nepuknya',
                                    'Ambil produk pelembab secukupnya untuk seluruh wajah',
                                    'Oleskan secara merata ke seluruh wajah dan leher dengan lembut',
                                    'Gunakan dua kali sehari — di pagi hari dan sebelum tidur',
                                ].map((text, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="min-w-[30px] min-h-[30px] lg:min-w-[50px] lg:min-h-[50px] border lg:border-2 border-[#7092CF] rounded-full flex items-center justify-center text-[#7293D0] text-xs lg:text-lg font-bold bg-white z-10">
                                            {(i + 1)
                                                .toString()
                                                .padStart(2, '0')}
                                        </div>
                                        <p className="text-[#333] lg:pt-2 lg:pl-2 text-xs lg:text-lg">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mascot Image */}
                        <img
                            src="/Blue-2.png"
                            alt="Mascot"
                            className="hidden lg:block absolute bottom-4 right-66 top-290 w-68 h-auto -scale-x-100"
                        />
                        <img
                            src="/Elements-49.png"
                            alt="Mascot"
                            className="hidden lg:block absolute bottom-4 right-62 top-276 w-38 h-auto"
                        />
                    </div>
                </div>

                {/* Product Type List */}
                <div className="flex flex-col gap-3 mx-5 lg:mx-45 mt-8 lg:mt-16">
                    <h2 className="text-xl lg:text-3xl font-bold">Tipe Moisturizer</h2>

                    {[
                        {
                            title: 'Gel Moisturizer',
                            desc: 'Ringan, berbahan dasar air, cepat menyerap, dan tidak meninggalkan rasa lengket atau berminyak, sehingga cocok untuk kulit berminyak.',
                            link: '/produk/gel-moisturizer',
                        },
                        {
                            title: 'Cream Moisturizer',
                            desc: 'Memberikan kelembapan lebih intens dan membantu memperbaiki fungsi pelindung kulit, sehingga lebih sesuai untuk kulit kering atau sensitif.',
                            link: '/produk/cream-moisturizer',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#FFF6ED] rounded-[20px] shadow-[0px_4px_0px_#f1dcc1] px-6 py-4 lg:px-10 lg:py-8 lg:mt-2"
                            style={{
                                boxShadow: '0px 4px 0px rgba(255, 231, 213, 1)',
                            }}
                        >
                            <h3 className="text-lg lg:text-2xl font-semibold mb-1 lg:mb-3">
                                {item.title}
                            </h3>
                            <p className="text-xs lg:text-base text-[#333] mb-3 lg:mb-5">{item.desc}</p>
                            <a
                                href={item.link}
                                className="inline-block bg-white hover:bg-[#405E93] hover:text-white hover:border-[#405E93] border-black font-semibold text-xs px-3 py-1 lg:px-4 lg:py-2 rounded-full border-2 transition"
                                style={{
                                    boxShadow: '0 4px 0px rgba(64, 94, 147, 1)',
                                }}
                            >
                                Lihat contoh produk →
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
