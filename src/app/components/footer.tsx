export default function Footer() {
    return (
        <footer className="flex items-center justify-center w-full h-24 border-t">
            <a
                className="flex items-center justify-center"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{" "}
                <img
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="h-4 ml-2"
                    width={92}
                    height={16}
                />
            </a>
        </footer>
    );
}