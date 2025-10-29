import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Label } from "./components/ui/label";
import { Palette, Square, Circle } from "lucide-react";

export default function App() {
  const [selectedElement, setSelectedElement] = useState<
    "button" | "card"
  >("button");
  const [selectedColor, setSelectedColor] = useState("#3b82f6");
  const [labelText, setLabelText] = useState("Click Me");

  const colorPresets = [
    { name: "Blue", value: "#3b82f6" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Green", value: "#10b981" },
    { name: "Orange", value: "#f97316" },
    { name: "Pink", value: "#ec4899" },
    { name: "Teal", value: "#14b8a6" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Simple Element Design</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Learn basic UI element design principles by
            experimenting with buttons and cards. Choose an
            element, select a color, and customize the label.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <Card className="p-8 bg-white shadow-lg">
            <h2 className="mb-6 flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Design Controls
            </h2>

            {/* Element Type Selection */}
            <div className="mb-8">
              <Label className="mb-3 block">
                1. Choose UI Element
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedElement("button")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === "button"
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Square className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                  <div className="text-sm">Button</div>
                </button>
                <button
                  onClick={() => setSelectedElement("card")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedElement === "card"
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Circle className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                  <div className="text-sm">Card</div>
                </button>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <Label className="mb-3 block">
                2. Select a Color
              </Label>
              <div className="grid grid-cols-3 gap-3">
                {colorPresets.map((color) => (
                  <button
                    key={color.value}
                    onClick={() =>
                      setSelectedColor(color.value)
                    }
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedColor === color.value
                        ? "border-slate-800 scale-105"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div
                      className="w-full h-10 rounded mb-2"
                      style={{ backgroundColor: color.value }}
                    />
                    <div className="text-sm">{color.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Label Input */}
            <div>
              <Label
                htmlFor="label-input"
                className="mb-3 block"
              >
                3. Add a Label
              </Label>
              <input
                id="label-input"
                type="text"
                value={labelText}
                onChange={(e) => setLabelText(e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter label text..."
              />
            </div>
          </Card>

          {/* Preview Panel */}
          <Card className="p-8 bg-white shadow-lg">
            <h2 className="mb-6">Preview</h2>

            <div className="bg-slate-50 rounded-lg p-12 min-h-[400px] flex items-center justify-center">
              {selectedElement === "button" ? (
                <button
                  className="px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: selectedColor,
                    color: "white",
                  }}
                >
                  {labelText}
                </button>
              ) : (
                <div
                  className="p-8 rounded-lg shadow-lg w-full max-w-sm"
                  style={{ backgroundColor: selectedColor }}
                >
                  <div className="text-white mb-2 opacity-90 text-sm uppercase tracking-wide">
                    Card Header
                  </div>
                  <h3 className="text-white mb-4">
                    {labelText}
                  </h3>
                  <p className="text-white opacity-80">
                    This is a simple card component with your
                    custom color and label. Cards are great for
                    grouping related content.
                  </p>
                </div>
              )}
            </div>

            {/* Design Tips */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="text-sm">
                <div className="mb-1">💡 Design Tip:</div>
                <div className="text-slate-600">
                  {selectedElement === "button"
                    ? "Keep button labels short and action-oriented. Use contrasting colors for better visibility."
                    : "Cards should have clear visual hierarchy. Use padding and spacing to improve readability."}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Principles Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white">
            <h3 className="mb-2">Simplicity</h3>
            <p className="text-slate-600 text-sm">
              Keep your designs clean and uncluttered. Focus on
              the essential elements only.
            </p>
          </Card>
          <Card className="p-6 bg-white">
            <h3 className="mb-2">Clarity</h3>
            <p className="text-slate-600 text-sm">
              Make sure labels are readable and colors have good
              contrast for accessibility.
            </p>
          </Card>
          <Card className="p-6 bg-white">
            <h3 className="mb-2">Consistency</h3>
            <p className="text-slate-600 text-sm">
              Use the same styles and colors throughout your
              design for a cohesive look.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}