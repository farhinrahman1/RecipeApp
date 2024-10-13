import Link from 'next/link';
export default function NotFound() {
    return (
        <div>
        <h1 className="text-black font-bold mb-6 text-xl items-center flex">
            This Page cannot be Found
        </h1>
        <Link href={'/'} className='font-semibold hover:underline'>Go to HomePage</Link>
    </div>
    )
}