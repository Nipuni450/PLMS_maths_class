import logo from "../assets/logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}

// PLMS logo image. On dark backgrounds ("light" variant) it sits on a white chip.
export default function Logo({ size = "md", variant = "dark" }: LogoProps) {
  const height = size === "sm" ? 34 : size === "lg" ? 72 : 48;
  const image = <img src={logo} alt="PLMS" style={{ height, width: "auto" }} draggable={false} />;
  return (
    <div className="select-none">
      {variant === "light" ? <div className="bg-white rounded-xl px-3 py-1.5 shadow-sm">{image}</div> : image}
    </div>
  );
}
