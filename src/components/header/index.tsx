import FacebookIcon from '@mui/icons-material/Facebook';
import './index.css'

export default function Header() {
    return(
        <div className="homepage-header">
            <a href='https://www.facebook.com/profile.php?id=100070486614938' target='_blank' className="homepage-header-facebook">
                <FacebookIcon />
                Petra Asesora
            </a>
            <a href="" target='_blank' className="homepage-header-whatsapp">
                WhatsApp
            </a>
        </div>
    )
}