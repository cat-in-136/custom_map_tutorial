using System;
using System.IO;
using System.Reflection;
using System.Drawing;

namespace ImageSlicerForCustomMap
{
	class Program
	{
		public static void Main(string[] args)
		{
			Size tileSize = new Size(256, 256);
			
			if (args.Length == 1) {
				string filepath = args[0];
				string outpathformat = Path.Combine(Path.GetDirectoryName(filepath), Path.GetFileNameWithoutExtension(filepath) + "_{0}_{1}" + Path.GetExtension(filepath));
				
				try {
					Image inputImg = Image.FromFile(filepath);
					int numOfCol = (int) Math.Ceiling((float)inputImg.Width / (float)tileSize.Width);
					int numOfRow = (int) Math.Ceiling((float)inputImg.Height / (float)tileSize.Height);
					
					
					for (int i = 0; i < numOfRow; i++) {
						for (int j = 0; j < numOfCol; j++) {
							Rectangle srcRect = new Rectangle(j * tileSize.Width, i * tileSize.Height, tileSize.Width, tileSize.Height);
							
							Bitmap outTileImg = new Bitmap(tileSize.Width, tileSize.Height);
							Graphics g = Graphics.FromImage(outTileImg);
							
							g.DrawImage(inputImg, new Rectangle(Point.Empty, tileSize), srcRect, GraphicsUnit.Pixel);
							
							outTileImg.Save(string.Format(outpathformat, i, j));
						}
					}
					
				} catch (ApplicationException ex) {
					Console.Error.WriteLine("Error: {0}", ex.Message);
				}
			} else {
				Assembly myAssembly = Assembly.GetEntryAssembly();
				Console.Error.WriteLine("Usage: {0} source_large_file.jpg", myAssembly.Location);
			}
		}
	}
}
