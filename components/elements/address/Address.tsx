import Link from "next/link";
import Icon from "../icons/Icon";

export type IWardAddress = {
    street: string
    city: string
    zip: string,
    mapUrl: string,
    className: string
}

const WardAddress = ({ street, city, zip, mapUrl, className }: IWardAddress) => {
    return (
        mapUrl ? (
            <address className={className}>
                <Link href={mapUrl}>
                    <a target="_blank">
                        {street}<Icon name="location-marker" className="h-3 w-3 ml-1 inline mb-1" /><br />
                        {city}, {zip}
                    </a>
                </Link>
            </address>
            ) : (
            <address className={className}>
                {street}<br />
                {city}, {zip}
            </address>
        )
    )
}
export default WardAddress