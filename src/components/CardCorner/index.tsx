import "./style.less";

const CardCorner = () => {
    return (
        <div className="group relative justify-start flex flex-col overflow-hidden p-6 transition-colors hover:bg-gradient-to-t hover:from-muted/80 hover:to-transparent h-80 md:p-9 border-b border-border">
            <div>123</div>
            <div>
                <span className="absolute top-[1px] left-[1px] z-10 h-3 w-[1px] bg-primary transition-all duration-500 group-hover:scale-100"></span>
                <span className="absolute top-[1px] left-[1px] z-10 h-[1px] w-3 bg-primary transition-all duration-500 group-hover:scale-100"></span>
            </div>
            <div>
                <span className="absolute top-[1px] right-[1px] z-10 h-3 w-[1px] bg-primary transition-all duration-500 group-hover:scale-100"></span>
                <span className="absolute top-[1px] right-[1px] z-10 h-[1px] w-3 bg-primary transition-all duration-500 group-hover:scale-100"></span>
            </div>
            <div>
                <span className="absolute bottom-[1px] left-[1px] z-10 h-3 w-[1px] bg-primary transition-all duration-500 group-hover:scale-100"></span>
                <span className="absolute bottom-[1px] left-[1px] z-10 h-[1px] w-3 bg-primary transition-all duration-500 group-hover:scale-100"></span>
            </div>
            <div>
                <span className="absolute bottom-[1px] right-[1px] z-10 h-3 w-[1px] bg-primary transition-all duration-500 group-hover:scale-100"></span>
                <span className="absolute bottom-[1px] right-[1px] z-10 h-[1px] w-3 bg-primary transition-all duration-500 group-hover:scale-100"></span>
            </div>
        </div>
    );
};

export default CardCorner;
