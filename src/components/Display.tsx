interface DisplayProps {
    count: number;
}

export function Display({ count }: DisplayProps) {
    return (    
        <div className="display">
            <p>Total: {count} curtidas</p>
        </div>
    );
}