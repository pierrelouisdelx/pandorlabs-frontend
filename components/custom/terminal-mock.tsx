import { cn } from '@/lib/utils'

interface TerminalLine {
    text: string
    type?: 'normal' | 'success' | 'warning' | 'error'
}

interface TerminalMockProps {
    lines: TerminalLine[]
    className?: string
}

const TerminalMock = ({ lines, className }: TerminalMockProps) => {
    const getLineColor = (type: TerminalLine['type'] = 'normal') => {
        switch (type) {
            case 'success':
                return 'text-green-light'
            case 'warning':
                return 'text-yellow-400'
            case 'error':
                return 'text-red-400'
            default:
                return 'text-gray'
        }
    }

    return (
        <div
            className={cn(
                'group overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-green-light/30 hover:shadow-green-light/20',
                className,
            )}
        >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4 transition-colors duration-300 group-hover:bg-white/10">
                <div className="h-3.5 w-3.5 rounded-full bg-red-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/50" />
                <div className="h-3.5 w-3.5 rounded-full bg-yellow-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/50" />
                <div className="h-3.5 w-3.5 rounded-full bg-green-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/50" />
                <span className="ml-2 text-xs font-medium text-gray transition-colors duration-300 group-hover:text-white">Terminal</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
                {lines.map((line, index) => (
                    <div
                        key={index}
                        className={cn(
                            'mb-1.5 leading-relaxed transition-all duration-300 hover:translate-x-1',
                            getLineColor(line.type),
                        )}
                    >
                        <span className="mr-2 font-bold text-green-100">$</span>
                        {line.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TerminalMock
