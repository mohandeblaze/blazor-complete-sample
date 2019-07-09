using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace complete_blazor_sample.Data
{
    public class SampleService
    {
        public static List<string> Samples = new List<string>();

        private static int GetCurrentSampleIndex(string sampleName)
        {
            return Samples.IndexOf(sampleName);
        }

        private static int GetConstrainedPosition(int position)
        {
            return position >= 0 && position <= Samples.Count - 1 ? position : position < 0 ? 0 : Samples.Count - 1;
        }

        public static string GetNextSamplePath(string currentPath)
        {
            int index = GetCurrentSampleIndex(currentPath) + 1;
            return Samples[GetConstrainedPosition(index)];
        }

        public static string GetPrevSamplePath(string currentPath)
        {
            int index = GetCurrentSampleIndex(currentPath) - 1;
            return Samples[GetConstrainedPosition(index)];
        }

    }
}
