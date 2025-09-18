const AuthLayout = ({ children, title, description, showRobot = true }) => {
    return (
        <div className="min-h-screen bg-white">
            <div className="flex min-h-screen">
                {/* Left Panel */}
                <div className="flex-1 flex flex-col items-center justify-between text-[#1E1C28] gap-8 md:gap-12 px-8 pb-10 pt-12 lg:px-12 lg:pb-14 lg:pt-24">
                    {/* Header */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        WRITNG BOT
                    </h1>

                    {/* Form Section */}
                    <div className="flex-1 max-w-md mx-auto w-full">
                        {title && (
                            <h2 className="text-[20px] md:text-[24px] lg:text-[28px] text-center font-bold mb-2">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-[#1E1C28B2] text-[16px] md:text-[18px] text-center mb-8">
                                {description}
                            </p>
                        )}
                        {children}
                    </div>

                    {/* Footer */}
                    <div className="mt-8 lg:mt-16">
                        <p className="text-[#1E1C28B2] text-xs md:text-sm">
                            © Writing bot, All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Right Panel - Robot */}
                {showRobot && (
                    <div className="hidden lg:flex flex-1 items-center justify-center bg-[#F7F6F9] min-w-[500px]">
                        <div className="relative">
                            <img
                                src="/robotCharacter.png"
                                alt="Writing Bot Robot"
                                className="w-full object-contain img-fluid"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthLayout;