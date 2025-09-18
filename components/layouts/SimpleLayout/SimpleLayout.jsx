const SimpleLayout = ({ children, title }) => {
    return (
        <div className="min-h-screen bg-white text-[#1E1C28]">
            <div className="container mx-auto flex flex-col justify-between gap-8 lg:gap-16 min-h-screen p-8 lg:p-12">
                {/* Header */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    WRITNG BOT
                </h1>

                {/* Main Content */}
                <div className="max-w-md mx-auto w-full">
                    {title && (
                        <h2 className="text-[20px] md:text-[24px] lg:text-[28px] text-center font-bold mb-8">
                            {title}
                        </h2>
                    )}
                    {children}
                </div>

                {/* Footer */}
                <div className="mt-8 lg:mt-16 text-center">
                    <p className="text-[#1E1C28B2] text-xs md:text-sm">
                        © Writing bot, All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SimpleLayout;