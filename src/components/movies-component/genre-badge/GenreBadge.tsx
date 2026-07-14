type Props = {
    genre: string;
}

const GenreBadge = ({ genre }: Props) => {
    return (
        <span className="badge bg-primary me-2">
            {genre}
        </span>
    );
};

export default GenreBadge;