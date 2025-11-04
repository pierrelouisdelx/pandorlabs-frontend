import Image from 'next/image'

export const ScreenLoading = () => {
    return (
        <div className="screen_loader bg-primary fixed inset-0 z-60 flex h-screen w-full">
            <Image
                src="/images/loader.gif"
                alt="loading"
                width="150"
                height="150"
                className="screen-loader absolute top-1/2 left-1/2 h-auto w-40 -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    )
}
